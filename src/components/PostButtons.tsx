"use client";
import React from "react";
import likePost from "@/app/actions/likePost";
const PostButtons = ({ post }: any) => {
  const onHandleLikePost = async () => {
    likePost(post._id);
  };

  return (
    <div className="flex gap-4">
      <span>
        <button onClick={onHandleLikePost}>like</button>
        {post.likes.length}
      </span>
      <span>reply</span>
      <span>share</span>
      <span>save</span>
    </div>
  );
};

export default PostButtons;
