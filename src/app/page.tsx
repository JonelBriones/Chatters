import ThreadPostContainer from "@/components/ThreadPostContainer";
import connectDB from "@/config/database";
import Post from "@/models/Post";
import { getSessionUser } from "@/utils/getSessionUser";
import { getSession } from "next-auth/react";

export default async function HomePage() {
  await connectDB();

  const result = await Post.find({}).lean();
  const posts = JSON.parse(JSON.stringify(result.reverse()));

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Home Page</h1>

      {posts.map(
        (post: any) =>
          post._id && (
            <div key={post._id}>
              <ThreadPostContainer post={post} />
            </div>
          )
      )}
    </div>
  );
}
