"use client";
import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
const TopNavbar = () => {
  const { data: session, status } = useSession();
  const profileimage = session?.user?.image || "";
  const [providers, setProviders] = useState<Record<string, any> | null>(null);
  if (status === "authenticated") {
    console.log("USER IS LOGGED IN");
  }
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="hidden md:flex justify-between place-items-center bg-neutral-900 px-6 py-3">
      <Link href="/" className="text-xl px-3 py-2">
        Thread Clone
      </Link>

      {/* <!-- Right Side Menu (Logged Out) --> */}
      {status !== "authenticated" && (
        <>
          {providers &&
            Object.values(providers).map((provider: any, idx) => (
              <button
                key={idx}
                onClick={() => signIn(provider.id)}
                className="flex items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
              >
                <FaGoogle className="text-white mr-2" />
                <span>Login or Register</span>
              </button>
            ))}
        </>
      )}

      {session && (
        <div className="flex items-centers gap-4">
          <button
            onClick={() => {
              signOut();
            }}
            className=" text-sm hover:bg-gray-700 rounded-md px-3 py-2"
            role="menuitem"
            id="user-menu-item-2"
          >
            Sign Out
          </button>
          <Image
            src={profileimage}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
