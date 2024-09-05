"use client";

import React, { useState } from "react";
import deleteTweet from "@/app/actions/deleteTweet";
import { BsThreeDots } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import Link from "next/link";

const PostSettings = ({ post }: any) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle
          ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center place-items-center bg-black"
          : ""
      } `}
    >
      {!toggle && (
        <BsThreeDots
          onClick={() => setToggle(true)}
          className="absolute top-0 right-0 m-4 cursor-pointer"
        />
      )}

      {toggle && (
        <div className="absolute flex place-items-center justify-center border border-white rounded-lg bg-black">
          <button
            className="hidden md:block w-[80px] p-3 hover:bg-gray-700 rounded-l-lg select-none"
            onClick={() => deleteTweet(post)}
          >
            Delete
          </button>
          <FaRegTrashAlt
            className="md:hidden w-[80px] rounded-r-lg "
            size={"2rem"}
            onClick={() => deleteTweet(post)}
          />
          <Link
            href={`${post._id}/edit`}
            className="text-center hidden md:block w-[80px] p-3 hover:bg-gray-700  cursor-pointer select-none"
          >
            Edit
          </Link>
          <Link href={`${post._id}/edit`}>
            <MdOutlineModeEdit
              className="md:hidden w-[80px] rounded-r-lg"
              size={"2rem"}
            />
          </Link>
          <div
            className="flex justify-center w-[80px] hover:bg-gray-700 p-3 rounded-r-lg select-none cursor-pointer"
            onClick={() => setToggle(false)}
          >
            <FcCancel size={"1.5rem"} />
          </div>

          {/* <PostDelete /> */}
        </div>
      )}
    </div>
  );
};

export default PostSettings;
