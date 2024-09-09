import Image from "next/image";
import React, { useState } from "react";
import profileImg from "@/assets/images/profile.png";
import followUser from "@/app/actions/followUser";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
import Link from "next/link";
import { toast } from "react-toastify";
const ActivityFollowsCard = ({ currentUser, user }: any) => {
  const onHandleFollowUser = async () => {
    console.log(user);
    if (!user) {
      redirectToSignIn();
      toast.error("You need to be signed in!");
      return;
    }
    followUser(user._id).then((res) => {
      if (res.error) return toast.error(res.error);
      toast.success(res.message);
    });
  };

  const [hoverUnfollow, setHoverUnfollow] = useState("");

  let isUserFollowingYou = user.followings.includes(currentUser._id);
  let isLoggedUserFollowingBack = user.followers.includes(currentUser._id);

  return (
    <div className="flex justify-between place-items-center bg-neutral-900 p-4 rounded-sm">
      <div className="flex gap-2 place-items-center">
        <Image
          height={40}
          width={40}
          src={user.image || profileImg}
          alt=""
          className="size-10 bg-red-50 rounded-full"
        />
        <div className="flex flex-col">
          <Link href={`/profile/${user._id}`} className="font-bold">
            {user.name}
          </Link>
          <span className="text-sm text-neutral-400 font-bold">
            Followed You
          </span>
        </div>
      </div>

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
        {/* 
        // if logged user follows another user = unfollow
        // if logged user and other user do not follow each other = follow
        // if logged user does not follow the other user who is follow the logged user = follow back
        
         */}
        {isUserFollowingYou &&
          isLoggedUserFollowingBack &&
          !hoverUnfollow &&
          "Friends"}
        {isUserFollowingYou &&
          isLoggedUserFollowingBack &&
          hoverUnfollow &&
          hoverUnfollow}
        {isUserFollowingYou && !isLoggedUserFollowingBack && "Follow Back"}
        {!isUserFollowingYou && !isLoggedUserFollowingBack && "Follow"}
      </button>
    </div>
  );
};

export default ActivityFollowsCard;
