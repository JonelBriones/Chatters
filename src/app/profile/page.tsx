import React, { useEffect } from "react";

import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import Profile from "@/components/Profile";
import Post from "@/models/Post";
import User from "@/models/User";
import Image from "next/image";
import profileImg from "@/assets/images/profile.png";
const page = async () => {
  const sessionUser = await getSessionUser();
  await connectDB();
  console.log(sessionUser?.userId);
  const { userId, user: googleUser }: any = sessionUser;
  const { name, bio, username }: string | null = await User.findById(
    userId
  ).lean();

  await connectDB();
  const posts = await Post.find({ owner: userId }).lean();
  console.log("googleuser", googleUser);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex place-items-center gap-2">
        <Image
          src={googleUser.image || profileImg}
          alt=""
          width={40}
          height={40}
          className="size-14 rounded-full bg-white"
        />
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-neutral-400 font-bold">@{username}</span>
        </div>
      </div>
      <p>{bio}</p>

      {/* CLIENT COMPONENTS USED HERE */}
      <Profile posts={posts} googleUser={googleUser} />
      {/* 
          ONLY SHOW LOGGED USERS THREAD POSTS
          */}
    </div>
  );
  // <Profile sessionUser={sessionUser} posts={posts} />;
};

export default page;
