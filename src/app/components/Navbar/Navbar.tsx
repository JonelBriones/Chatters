"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 h-full select-none">
      <div
        className="size-[150px] flex place-items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h1>Thread Clone</h1>
      </div>
      <Link
        href="/"
        className={`p-3 rounded-md ${pathname == "/" ? "bg-cyan-500" : ""} `}
      >
        Home
      </Link>
      <Link
        href="/search"
        className={`p-3 rounded-md ${
          pathname == "/search" ? "bg-cyan-500" : ""
        } `}
      >
        Search
      </Link>
      <Link
        href="/activity"
        className={`p-3 rounded-md ${
          pathname == "/activity" ? "bg-cyan-500" : ""
        } `}
      >
        Activity
      </Link>
      <Link
        href="/create-tweet"
        className={`p-3 rounded-md ${
          pathname == "/create-tweet" ? "bg-cyan-500" : ""
        } `}
      >
        Create Tweet
      </Link>
      <Link
        href="/profile"
        className={`p-3 rounded-md ${
          pathname == "/profile" ? "bg-cyan-500" : ""
        } `}
      >
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
