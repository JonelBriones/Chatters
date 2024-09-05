import ThreadPostContainer from "@/components/ThreadPostContainer";
import connectDB from "@/config/database";
import { convertToSerializableObject } from "@/utils/convertToObject";
import Post from "@/models/Post";
import React from "react";
import PostFormEdit from "@/components/TweetFormEdit";

const page = async ({ params }: any) => {
  await connectDB();
  const postResult = await Post.findById(params.id).lean();

  const post = convertToSerializableObject(postResult);
  console.log("params:", params);
  console.log("post", postResult);
  if (!postResult) {
    return <h1>Post not found</h1>;
  } else return <PostFormEdit post={post} />;
};

export default page;
