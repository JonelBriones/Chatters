import ProfileHeader from "@/components/ProfileHeader";
import ProfilePost from "@/components/ProfilePost";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import React from "react";

const page = async ({ params }: any) => {
  await connectDB();
  const userResult = await User.findById(params.id);
  const user = JSON.parse(JSON.stringify(userResult));
  const userPosts = await Post.find({ owner: params.id }).lean();
  const posts = JSON.parse(JSON.stringify(userPosts));
  console.log("user", user.email);
  return (
    <div>
      <ProfileHeader user={user} />
      <ProfilePost posts={posts} user={user} />
    </div>
  );
};

export default page;
