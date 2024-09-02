import React, { useEffect } from "react";
import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import ProfilePost from "@/components/ProfilePost";
import Post from "@/models/Post";
import User from "@/models/User";
import ProfileHeader from "@/components/ProfileHeader";
const page = async () => {
  await connectDB();
  const { userId }: any | null = await getSessionUser();
  const userResult = await User.findById(userId);
  const user = JSON.parse(JSON.stringify(userResult));
  const userPosts = await Post.find({ owner: userId }).lean();
  const posts = JSON.parse(JSON.stringify(userPosts));
  console.log("user", user);

  return (
    <div>
      <ProfileHeader user={user} />
      <ProfilePost posts={posts.reverse()} user={user} />
    </div>
  );
};

export default page;
