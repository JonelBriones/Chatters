"use server";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { postcss } from "tailwindcss";
async function createTweet(formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User Id is required!");
  }

  const { userId, user } = sessionUser;
  const images = formData.getAll("images").filter((image) => image.name !== "");

  let message;

  const postData = {
    owner: userId,
    username: user.name.trim().replace(/\s+/g, "").toLowerCase(),
    text: formData.get("text"),
  };

  // postData.images = images;

  if (formData.text) message = "Text required!";
  const newTweet = new Post(postData);

  await newTweet.save();

  revalidatePath("/", "layout");
  redirect(`/`);
}

export default createTweet;
