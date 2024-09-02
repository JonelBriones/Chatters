import ThreadPostContainer from "@/components/ThreadPostContainer";
import connectDB from "@/config/database";
import Post from "@/models/Post";

export default async function HomePage() {
  await connectDB();

  const result = await Post.find({}).lean();
  const posts = JSON.parse(JSON.stringify(result.reverse()));
  return (
    <>
      {posts.map(
        (post: any) =>
          post._id && (
            <div key={post._id}>
              <ThreadPostContainer post={post} />
            </div>
          )
      )}
    </>
  );
}
