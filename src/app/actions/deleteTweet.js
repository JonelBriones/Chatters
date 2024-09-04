"use server";
import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";
import Post from "@/models/Post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function deleteTweet(post) {
  console.log("deleting post:", post);
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required!");
  }

  await Post.findOneAndDelete({ _id: post._id });
  revalidatePath("/", "layout");
  redirect(`/`);
}
export default deleteTweet;
