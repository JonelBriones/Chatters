"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
const TopNavbar = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => router.push("/")}>
      <h1 className="text-xl">Thread Clone</h1>
    </div>
  );
};

export default TopNavbar;
