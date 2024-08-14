import ThreadPostContainer from "@/components/ThreadPostContainer";
import React from "react";
import connectDB from "@/config/database";
import Post from "@/models/Post";
const Home = async () => {
  await connectDB();
  const posts = await Post.find({}).lean();

  // console.log(posts);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Home Page</h1>
      {posts.map((post: any) => (
        <div key={post._id}>
          <ThreadPostContainer key={post._id} post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
