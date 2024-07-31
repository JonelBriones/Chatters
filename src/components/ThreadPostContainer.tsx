import { Thread } from "@/app/page";
import React from "react";

const ThreadPostContainer = ({ name, text }: Thread) => {
  return (
    <div className=" flex gap-4 p-6 bg-neutral-900 rounded-xl">
      <div className="flex flex-col gap-1">
        <img
          src=""
          alt=""
          className="size-10 flex-none rounded-full bg-red-300"
        />
        <div className="h-full flex justify-center">
          <div className="border-l border-neutral-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span>{name}</span>
        <p>{text}</p>
        <div className="flex gap-4">
          <span>like</span>
          <span>reply</span>
          <span>share</span>
          <span>save</span>
        </div>
      </div>
    </div>
  );
};

export default ThreadPostContainer;
