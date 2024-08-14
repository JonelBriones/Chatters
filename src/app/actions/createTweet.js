"use server";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function createTweet(formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User Id is required!");
  }

  const { userId, user } = sessionUser;
  const images = formData.getAll("images").filter((image) => image.name !== "");
  const postData = {
    owner: userId,
    username: user.name,
    text: formData.get("text"),
  };
  // postData.images = images;

  const newTweet = new Post(postData);
  await newTweet.save();

  revalidatePath("/", "layout");

  redirect(`/tweet/${newTweet.id}`);
}

export default createTweet;
