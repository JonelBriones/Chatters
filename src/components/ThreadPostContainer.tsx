import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThreadPostContainer = ({ post }: any) => {
  return (
    <div className=" flex gap-4 p-6 bg-neutral-900 rounded-xl">
      <div className="flex flex-col gap-1">
        <Image
          src={""}
          alt=""
          width={0}
          height={0}
          className="size-10 flex-none rounded-full bg-red-300"
        />
        <div className="h-full flex justify-center">
          <div className="border-l border-neutral-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span>@{post.username}</span>
        <p>{post.text}</p>

        <div className="flex gap-4">
          <span>{post.likes.length} likes</span>
          <span>reply</span>
          <span>share</span>
          <span>save</span>
        </div>
      </div>
    </div>
  );
};

export default ThreadPostContainer;
