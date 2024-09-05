import followUser from "@/app/actions/followUser";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SearchProfileCard = ({ user }: any) => {
  const { data: session } = useSession();
  let isUserFollowingYou = user.followings.includes(session?.user?.id);
  let isLoggedUserFollowingBack = user.followers.includes(session?.user?.id);

  const onHandleFollowUser = async () => {
    console.log(user);
    if (!user) {
      redirectToSignIn();
      return;
    }
    followUser(user._id);
  };
  console.log("user", user);

  function followType() {
    if (isUserFollowingYou && !isLoggedUserFollowingBack) {
      return "Follow Back";
    } else if (
      (isUserFollowingYou && isLoggedUserFollowingBack) ||
      (!isUserFollowingYou && isLoggedUserFollowingBack)
    ) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }
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
          {/* <span className="text-sm text-neutral-400">@{user.username}</span> */}
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
