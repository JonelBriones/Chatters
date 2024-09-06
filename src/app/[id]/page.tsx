import connectDB from "@/config/database";
import Post from "@/models/Post";
import React from "react";
import ThreadPostContainer from "@/components/ThreadPostContainer";

const page = async ({ params }: any) => {
  await connectDB();
  const postResult = await Post.findById(params.id).lean();

  const post = JSON.parse(JSON.stringify(postResult));

  return (
    <div className="h-screen md:h-full flex md:block place-items-center justify-center">
      <ThreadPostContainer post={post} />
    </div>
  );
};

export default page;
