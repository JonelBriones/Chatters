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
  } else
    return (
      <div className="h-[90vh] md:h-full flex md:block place-items-center justify-center">
        <PostFormEdit post={post} />
      </div>
    );
};

export default page;
