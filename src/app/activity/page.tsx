import Activity from "@/components/Activity";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import React from "react";
import Post from "@/models/Post";
import { UserInterface } from "@/types/types";

const page = async () => {
  await connectDB();

  const { userId } = (await getSessionUser()) as UserInterface;
  const loggedUser = await User.findById(userId);

  const users = await User.find({}).lean();
  const posts = await Post.find({ owner: userId }).lean();
  console.log("LOGGED USER", loggedUser);

  return (
    <Activity
      loggedUser={JSON.parse(JSON.stringify(loggedUser))}
      users={JSON.parse(JSON.stringify(users))}
      posts={JSON.parse(JSON.stringify(posts.reverse()))}
    />
  );
};

export default page;
