import ThreadPostContainer from "@/components/ThreadPostContainer";
import React from "react";

async function fetchUsers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}`);
    if (!res.ok) {
      throw new Error("Failed to fetch user data!");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Home = async () => {
  const posts = [
    {
      text: "this is a test post",
      name: "ijonel906",
    },
    {
      text: "this is a test post",
      name: "ijonel",
    },
  ];

  const users = await fetchUsers();
  console.log(users);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Home Page</h1>
      {posts.map(({ name, text }: any) => (
        <div key={name}>
          <ThreadPostContainer name={name} text={text} />
        </div>
      ))}
    </div>
  );
};

export default Home;
