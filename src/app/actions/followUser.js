"use server";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
async function followUser(id) {
  // console.log("running follow user function", id);
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required!");
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);
  const userToFollow = await User.findById(id);

  let isFollowed = user.followings.includes(id);

  let message;

  if (isFollowed) {
    console.log("removing followers", id);
    user.followings.pull(id);
    userToFollow.followers.pull(userId);

    message = "Unfollowed";
    isFollowed = false;
  } else {
    console.log("adding followers", id);
    user.followings.push(id);
    userToFollow.followers.push(userId);
    message = "Followed";
    isFollowed = true;
  }

  (await user.save()) && userToFollow.save();

  revalidatePath("/", "layout");

  return {
    message,
    isFollowed,
  };
  //   redirect(`/post/${post._id}`);
}
export default followUser;
