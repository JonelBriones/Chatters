"use client";
import React, { useState } from "react";
import updateTweet from "@/app/actions/updateTweet";

const PostFormEdit = ({ post }: any) => {
  const updateTweetById = updateTweet.bind(null, post._id);

  return (
    <form className="flex flex-col gap-8" action={updateTweetById}>
      <textarea
        id="text"
        name="text"
        defaultValue={post.text}
        className="border rounded w-full py-2 px-3 outline-none text-black"
        rows={4}
        placeholder="tweet ..."
        required
      ></textarea>
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          Images (Select up to 4 images)
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3"
          accept="image/*"
          multiple
        />
      </div>

      <button className="p-3 bg-cyan-500 rounded-md" type="submit">
        Post Tweet
      </button>
    </form>
  );
};

export default PostFormEdit;
