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
  const user = await User.findById(userId);
  const posts = await Post.find({ owner: userId }).lean();
  console.log("user", user);

  return (
    <div>
      <ProfileHeader user={user} />
      <ProfilePost posts={posts} user={user} />
    </div>
  );
};

export default page;
