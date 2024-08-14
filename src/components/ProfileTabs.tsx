"use client";

import React, { useState } from "react";
const [toggleType, setToggleType] = useState("threads");

const ProfileTabs = () => {
  return (
    <>
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
          <div>{/* <ThreadPostContainer post={post} /> */}</div>
        )}
        {toggleType == "replies" && <div>Replies Posts</div>}
        {toggleType == "repost" && <div>Repost Posts</div>}
      </div>
    </>
  );
};

export default ProfileTabs;
