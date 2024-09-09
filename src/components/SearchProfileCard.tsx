import followUser from "@/app/actions/followUser";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SearchProfileCard = ({ user }: any) => {
  const { data: session } = useSession();
  let sessionId = session?.user?.id;
  let isUserFollowingYou = user.followings.includes(sessionId) || null;
  let isLoggedUserFollowingBack = user.followers.includes(sessionId);

  const onHandleFollowUser = async () => {
    console.log(user);
    if (!session) {
      redirectToSignIn();
      return;
    }
    followUser(user._id);
  };

  const [hoverUnfollow, setHoverUnfollow] = useState("");
  return (
    <div className="p-2 flex justify-between place-items-center">
      <div className="flex gap-2 place-items-center">
        <Image
          height={40}
          width={40}
          src={user.image}
          alt=""
          className="size-10 bg-red-50 rounded-full"
        />
        <div className="flex flex-col">
          <Link
            href={`/profile/${user._id}`}
            className="text-sm text-neutral-400 font-bold"
          >
            @{user.username}
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className={`h-8 px-6 text-sm bg-cyan-500 rounded-md ${
            isUserFollowingYou && isLoggedUserFollowingBack
              ? "hover:bg-red-600 w-[100px]"
              : ""
          } transition-color ease-out duration-700`}
          onClick={onHandleFollowUser}
          onMouseOver={() => setHoverUnfollow("Unfollow")}
          onMouseLeave={() => setHoverUnfollow("")}
        >
          {isUserFollowingYou && !isLoggedUserFollowingBack && "Follow Back"}
          {!isUserFollowingYou && isLoggedUserFollowingBack && "Following"}
          {!isUserFollowingYou && !isLoggedUserFollowingBack && "Follow"}
          {isUserFollowingYou &&
            isLoggedUserFollowingBack &&
            !hoverUnfollow &&
            "Friends"}
          {isUserFollowingYou &&
            isLoggedUserFollowingBack &&
            hoverUnfollow &&
            hoverUnfollow}
        </button>
      </div>
    </div>
  );
};

export default SearchProfileCard;
