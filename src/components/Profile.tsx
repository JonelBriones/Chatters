"use client";
import React, { useEffect, useState } from "react";
import ThreadPostContainer from "./ThreadPostContainer";
import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";

const Profile = ({ posts }: any, { googleUser }: any) => {
  const [toggleType, setToggleType] = useState("threads");
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const { user } = getSessionUser();
      // await connectDB();
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex">
        <button
          dir="ltr"
          className={`${
            toggleType == "threads" ? "bg-neutral-950" : "bg-neutral-900"
          } flex-1 py-2 rounded-s-md`}
          onClick={() => setToggleType("threads")}
        >
          Threads
        </button>
        <button
          className={`${
            toggleType == "replies" ? "bg-neutral-950" : "bg-neutral-900"
          } flex-1 py-2`}
          onClick={() => setToggleType("replies")}
        >
          Replies
        </button>
        <button
          dir="rtl"
          className={`${
            toggleType == "repost" ? "bg-neutral-950" : "bg-neutral-900"
          } flex-1 py-2 rounded-s-lg`}
          onClick={() => setToggleType("repost")}
        >
          Repost
        </button>
      </div>
      <div>
        {/* 
          ONLY SHOW LOGGED USERS THREAD POSTS
          */}
        {toggleType == "threads" && (
          <>
            {posts?.map((post: any) => (
              <div key={post._id}>
                <ThreadPostContainer post={post} />
              </div>
            ))}
          </>
        )}
        {toggleType == "replies" && <div>Replies Posts</div>}
        {toggleType == "repost" && <div>Repost Posts</div>}
      </div>
    </div>
  );
};

export default Profile;
