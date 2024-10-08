"use client";
import React from "react";
import createTweet from "@/app/actions/createTweet";

const PostForm = () => {
  return (
    <form
      className="flex flex-col place-content-end justify-between gap-8 w-full"
      action={createTweet}
    >
      <textarea
        id="text"
        name="text"
        className="border rounded w-full py-2 px-3 outline-none text-black"
        rows={4}
        placeholder="tweet ..."
        required
      ></textarea>

      <div>
        {/* <div className="mb-4">
          <label htmlFor="images" className="block font-bold mb-2">
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
        </div> */}

        <button className="p-3 bg-cyan-500 rounded-md w-full" type="submit">
          Post Tweet
        </button>
      </div>
    </form>
  );
};

export default PostForm;
