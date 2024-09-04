"use client";

import deleteTweet from "@/app/actions/deleteTweet";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const PostDelete = ({ post }: any) => {
  return (
    <FaRegTrashAlt
      className="absolute top-0 right-0 m-4"
      onClick={() => deleteTweet(post)}
    />
  );
};

export default PostDelete;
