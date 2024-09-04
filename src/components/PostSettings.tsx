"use client";

import React, { useState } from "react";
import deleteTweet from "@/app/actions/deleteTweet";
import { BsThreeDots } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

const PostSettings = ({ post }: any) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center place-items-center ${
        toggle ? "bg-black opacity-90" : ""
      } `}
    >
      {!toggle && (
        <BsThreeDots
          onClick={() => setToggle(true)}
          className="absolute top-0 right-0 m-4 cursor-pointer"
        />
      )}
      {/* {
      toggle && (
        <div className="hidden md:visible border border-white rounded-lg my-8">
          <button
            className="w-[80px] p-3 hover:bg-gray-700 rounded-l-lg"
            onClick={() => PostDelete(post)}
          >
            Delete
          </button>
          <button className="w-[80px] p-3 hover:bg-gray-700  rounded-r-lg">
            Edit
          </button>

        </div>
      )} */}

      {toggle && (
        <div className="absolute flex place-items-center justify-center border  border-white rounded-lg">
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
          <button className=" hidden md:block w-[80px] p-3 hover:bg-gray-700  select-none">
            Edit
          </button>
          <MdOutlineModeEdit
            className="md:hidden w-[80px] rounded-r-lg"
            size={"2rem"}
          />

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
