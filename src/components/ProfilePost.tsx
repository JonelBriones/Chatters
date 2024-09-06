"use client";
import React, { useState } from "react";
import ProfilePostCard from "./ProfilePostCard";
import { useSession } from "next-auth/react";

const ProfilePost = ({ posts, user }: any) => {
  const [toggleType, setToggleType] = useState("threads");
  return (
    <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4 ">
            {posts?.map((post: any) => (
              <div key={post._id}>
                <ProfilePostCard post={post} user={user} />
              </div>
            ))}
          </div>
        )}
        {toggleType == "replies" && <div></div>}
        {toggleType == "repost" && <div></div>}
      </div>
    </div>
  );
};

export default ProfilePost;
