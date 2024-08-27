import ThreadPostContainer from "@/components/ThreadPostContainer";
import React from "react";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "@/utils/getSessionUser";

const Home = async () => {
  await connectDB();

  const posts = await Post.find({}).lean();
  let post = JSON.parse(JSON.stringify(posts));

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Home Page</h1>
      {post.reverse().map((post: any) => (
        <div key={post._id}>
          <ThreadPostContainer post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
