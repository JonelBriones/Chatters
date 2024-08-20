"use client";
import React from "react";
import likePost from "@/app/actions/likePost";
import { IoHeartOutline } from "react-icons/io5";
import {
  FaHeart,
  FaComment,
  FaRegHeart,
  FaRetweet,
  FaShare,
} from "react-icons/fa";
import { useSession } from "next-auth/react";

const PostButtons = ({ post }: any) => {
  const { data: user } = useSession();
  console.log(user);

  const onHandleLikePost = async () => {
    likePost(post._id);
  };
  let isLiked = post.likes.includes(user?.user?.id);

  const formatCash = (data: any) =>
    Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(data);

  return (
    <div className="flex gap-6 h-[20px] ">
      <span
        className={`flex gap-1 w-[60px]  place-items-center cursor-pointer mr-3 ${
          isLiked ? "text-red-500" : ""
        }`}
        onClick={onHandleLikePost}
      >
        {isLiked ? (
          <FaHeart color="bg-red-500" size={"1.2rem"} />
        ) : (
          <FaRegHeart size={"1.2rem"} />
        )}
        <span className="block text-sm">
          {post.likes.length > 0 && formatCash(post.likes.length)}
        </span>
      </span>
      <span className="flex gap-1 w-[60px] place-items-center cursor-pointer mr-3">
        <FaComment />
        {/* {post.replies.length > 0 && formatCash(post.replies.length)} */}
        {post.replies.length > 0 && formatCash(100070)}
      </span>
      <span className="flex gap-1 w-[60px] place-items-center cursor-pointer mr-3">
        <FaRetweet />
        {/* {post.likes.length > 0 && formatCash(post.likes.length)} */}
      </span>
      <span className="flex gap-1 w-[60px] place-items-center cursor-pointer mr-3">
        <FaShare />
      </span>
    </div>
  );
};

export default PostButtons;
