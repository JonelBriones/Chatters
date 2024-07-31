"use client";
import ThreadPostContainer from "@/components/ThreadPostContainer";
import React, { useState } from "react";

const page = () => {
  const [toggleType, setToggleType] = useState("threads");
  let username = "ijonel906";
  return (
    <div className="flex flex-col gap-8">
      <div className="flex place-items-center gap-2">
        <img src="" alt="" className="size-14 rounded-full bg-white" />
        <div className="flex flex-col">
          <span className="font-bold">Jonel</span>
          <span className="text-neutral-400 font-bold">@ijonel906</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quia,
        voluptatibus aliquid obcaecati in consequatur quisquam illo ducimus
        dolorem odio.
      </p>
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
          <div>
            <ThreadPostContainer name={"ijonel906"} text={"testing"} />
          </div>
        )}
        {toggleType == "replies" && <div>Replies Posts</div>}
        {toggleType == "repost" && <div>Repost Posts</div>}
      </div>
    </div>
  );
};

export default page;
