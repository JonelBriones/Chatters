"use server";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
async function likePost(id) {
  console.log("running like post function", id);
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required!");
  }

  const { userId } = sessionUser;

  const existingPost = await Post.findById(id);

  let isLiked = existingPost.likes.includes(userId);

  let message;

  if (isLiked) {
    existingPost.likes.pull(userId);
    message = "Unliked";
    isLiked = false;
  } else {
    existingPost.likes.push(userId);
    message = "Liked";
    isLiked = true;
  }
  console.log("liked post", isLiked);

  await existingPost.save();

  revalidatePath("/", "layout");

  return {
    message,
    isLiked,
  };
  //   redirect(`/post/${post._id}`);
}
export default likePost;
