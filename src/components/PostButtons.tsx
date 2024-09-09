"use client";
import React from "react";
import likePost from "@/app/actions/likePost";
import {
  FaHeart,
  FaComment,
  FaRegHeart,
  FaRetweet,
  FaShare,
} from "react-icons/fa";
import { useSession } from "next-auth/react";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
import { SessionUser } from "@/types/types";

const PostButtons = ({ post }: any) => {
  const { data: session } = useSession();
  let isLiked = post.likes.includes((session?.user as SessionUser)?.id);
  const onHandleLikePost = async () => {
    if (!session) {
      redirectToSignIn();
      return;
    }
    likePost(post._id);
  };

  const formatCash = (data: any) =>
    Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(data);

  return (
    <div className="flex gap-6 h-[20px] ">
      <span
        className={`flex gap-1 place-items-center cursor-pointer  ${
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
      <span className="flex gap-1 place-items-center cursor-pointer ">
        <FaComment />
        {/* {post.replies.length > 0 && formatCash(post.replies.length)} */}
        {post.replies.length > 0 && formatCash(100070)}
      </span>
      <span className="flex gap-1 place-items-center cursor-pointer ">
        <FaRetweet />

        {/* {post.likes.length > 0 && formatCash(post.likes.length)} */}
      </span>
      <span className="flex gap-1 place-items-center cursor-pointer ">
        <FaShare />
      </span>
    </div>
  );
};

export default PostButtons;
