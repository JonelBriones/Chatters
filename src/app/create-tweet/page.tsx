import TweetForm from "@/components/TweetForm";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="hidden mb:block font-bold text-3xl">Create Tweet</h1>
      <div>
        <TweetForm />
      </div>
    </div>
  );
};

export default page;
