"use client";
import ButtonLink from "@/components/Buttons/ButtonLink";

import React, { useState } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [post, setPost] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setPost(text);
    setText("");
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Create Tweet</h1>
      <div>
        <form className="flex flex-col gap-8" onSubmit={(e) => onSubmit(e)}>
          <input
            name="text"
            value={text}
            className="bg-neutral-900 outline-none p-4"
            onChange={(e) => onChangeHandler(e)}
          />
          <button className="p-3 bg-cyan-500 rounded-md" type="submit">
            Post Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
