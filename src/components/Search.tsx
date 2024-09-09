"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchProfileCard from "./SearchProfileCard";
import { useSession } from "next-auth/react";
import { SessionUser } from "@/types/types";

const Search = ({ users }: any) => {
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  const sessionId = (session?.user as SessionUser)?.id;
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h1 className="hidden mb:block font-bold text-3xl">Search</h1>
      <div className="flex place-items-center gap-4 p-4 bg-neutral-900 rounded-md ">
        <IoSearch size={"1.75rem"} />
        <input
          type="text"
          placeholder="Search users"
          className="bg-neutral-900 w-full outline-none"
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
      </div>
      {users.map((user: any) =>
        !search && user._id != sessionId ? (
          <SearchProfileCard user={user} key={user._id} />
        ) : (
          user.username.toLowerCase().includes(search) &&
          user._id != sessionId && (
            <SearchProfileCard user={user} key={user._id} />
          )
        )
      )}
    </div>
  );
};

export default Search;
