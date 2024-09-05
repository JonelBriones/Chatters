"use server";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updateTweet(postId, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User Id is required!");
  }

  const { userId, user } = sessionUser;

  const existingPost = await Post.findById(postId);

  if (userId !== existingPost.owner.toString()) {
    throw new Error("You do not have access to make edits to this post.");
  }

  let message;

  const postData = {
    owner: userId,
    username: user.name.trim().replace(/\s+/g, "").toLowerCase(),
    text: formData.get("text"),
  };

  if (formData.text) message = "Text required!";
  const updateTweet = await Post.findByIdAndUpdate(postId, postData);

  await updateTweet.save();

  revalidatePath("/", "layout");
  redirect(`/`);
}

export default updateTweet;
