"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TiHome } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch, IoCreateOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-[220px] px-6 bg-neutral-900">
      <div className="hidden md:flex flex-col gap-2 h-full select-none">
        <Link
          href="/"
          className={`flex place-items-center gap-2 p-3 rounded-md ${
            pathname == "/" ? "bg-cyan-500" : ""
          } `}
        >
          <TiHome size={"1.5rem"} />
          Home
        </Link>
        <Link
          href="/search"
          className={`flex place-items-center gap-2 p-3 rounded-md ${
            pathname == "/search" ? "bg-cyan-500" : ""
          } `}
        >
          <IoSearch size={"1.5rem"} />
          Search
        </Link>
        <Link
          href="/activity"
          className={`flex place-items-center gap-2 p-3 rounded-md ${
            pathname == "/activity" ? "bg-cyan-500" : ""
          } `}
        >
          <FaHeart size={"1.5rem"} />
          Activity
        </Link>
        <Link
          href="/create-tweet"
          className={`flex place-items-center gap-2 p-3 rounded-md ${
            pathname == "/create-tweet" ? "bg-cyan-500" : ""
          } `}
        >
          <IoCreateOutline size={"1.5rem"} />
          Create Tweet
        </Link>
        <Link
          href="/profile"
          className={`flex place-items-center gap-2 p-3 rounded-md ${
            pathname == "/profile" ? "bg-cyan-500" : ""
          } `}
        >
          <FaUserAlt size={"1.5rem"} />
          Profile
        </Link>
      </div>

      {/* MOBILE NAVBAR */}

      <div className="md:hidden flex justify-evenly select-none absolute bottom-0 left-0 right-0 py-2 z-10 bg-black">
        <Link
          href="/"
          className={`p-3 rounded-md ${pathname == "/" ? "bg-cyan-500" : ""} `}
        >
          <TiHome size={"2rem"} />
        </Link>
        <Link
          href="/search"
          className={`p-3 rounded-md ${
            pathname == "/search" ? "bg-cyan-500" : ""
          } `}
        >
          <IoSearch size={"2rem"} />
        </Link>
        <Link
          href="/create-tweet"
          className={`p-3 rounded-md ${
            pathname == "/create-tweet" ? "bg-cyan-500" : ""
          } `}
        >
          <IoCreateOutline size={"2rem"} />
        </Link>
        <Link
          href="/activity"
          className={`p-3 rounded-md ${
            pathname == "/activity" ? "bg-cyan-500" : ""
          } `}
        >
          <FaHeart size={"2rem"} />
        </Link>

        <Link
          href="/profile"
          className={`p-3 rounded-md ${
            pathname == "/profile" ? "bg-cyan-500" : ""
          } `}
        >
          <FaUserAlt size={"2rem"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
