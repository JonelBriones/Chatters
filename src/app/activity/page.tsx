import Activity from "@/components/Activity";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import React from "react";
import { getUserFollowings } from "@/utils/getUserFollowings";
import { stringify } from "querystring";
import Post from "@/models/Post";
const page = async () => {
  await connectDB();
  const { userId } = await getSessionUser();
  const user = await User.findById(userId);

  const users = await User.find({}).lean();
  const posts = await Post.find({}).lean();

  return (
    <Activity
      user={JSON.parse(JSON.stringify(user))}
      users={JSON.parse(JSON.stringify(users))}
      posts={JSON.parse(JSON.stringify(posts))}
    />
  );
};

export default page;
