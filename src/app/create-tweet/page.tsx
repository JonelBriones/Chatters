import TweetForm from "@/components/TweetForm";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="hidden mb:block font-bold text-3xl">Create Tweet</h1>
      <div className="h-[90vh] md:h-full flex md:block place-items-center justify-center">
        <TweetForm />
      </div>
    </div>
  );
};

export default page;
