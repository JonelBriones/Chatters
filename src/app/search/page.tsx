import React from "react";
import { IoSearch } from "react-icons/io5";
let users = [
  {
    name: "Jonel Briones",
    username: "ijonel906",
  },
  {
    name: "Jon B",
    username: "jb",
  },
  {
    name: "JJ",
    username: "jj",
  },
  {
    name: "J",
    username: "jned",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Search</h1>
      <div className="flex place-items-center gap-4 p-4 bg-neutral-900 rounded-md ">
        <IoSearch size={"1.75rem"} />
        <input
          type="text"
          placeholder="Search users"
          className="bg-neutral-900 w-full outline-none"
        />
      </div>
      {users.map((user) => (
        <div
          className="p-2 flex justify-between place-items-center"
          key={user.name}
        >
          <div className="flex gap-2 place-items-center">
            <img src="" alt="" className="size-10 bg-red-50 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold">{user.name}</span>
              <span className="text-sm text-neutral-400">@{user.username}</span>
            </div>
          </div>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ))}
      {users.map((user) => (
        <div
          className="p-2 flex justify-between place-items-center"
          key={user.name}
        >
          <div className="flex gap-2 place-items-center">
            <img src="" alt="" className="size-10 bg-red-50 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold">{user.name}</span>
              <span className="text-sm text-neutral-400">@{user.username}</span>
            </div>
          </div>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ))}
      {users.map((user) => (
        <div
          className="p-2 flex justify-between place-items-center"
          key={user.name}
        >
          <div className="flex gap-2 place-items-center">
            <img src="" alt="" className="size-10 bg-red-50 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold">{user.name}</span>
              <span className="text-sm text-neutral-400">@{user.username}</span>
            </div>
          </div>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ))}
      {users.map((user) => (
        <div
          className="p-2 flex justify-between place-items-center"
          key={user.name}
        >
          <div className="flex gap-2 place-items-center">
            <img src="" alt="" className="size-10 bg-red-50 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold">{user.name}</span>
              <span className="text-sm text-neutral-400">@{user.username}</span>
            </div>
          </div>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ))}
      {users.map((user) => (
        <div
          className="p-2 flex justify-between place-items-center"
          key={user.name}
        >
          <div className="flex gap-2 place-items-center">
            <img src="" alt="" className="size-10 bg-red-50 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold">{user.name}</span>
              <span className="text-sm text-neutral-400">@{user.username}</span>
            </div>
          </div>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default page;
