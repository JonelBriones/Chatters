import Image from "next/image";
import React, { useState } from "react";
import profileImg from "@/assets/images/profile.png";
import followUser from "@/app/actions/followUser";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
import ProfilePostCard from "./ProfilePostCard";
const ActivityLikedCard = ({ currentUser, user, post }: any) => {
  const [showPost, setShowPost] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 place-items-center">
        <Image
          height={40}
          width={40}
          src={user.image || profileImg}
          alt=""
          className="size-10 bg-red-50 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">{user.name}</span>
          <span className="text-sm text-neutral-400 font-bold">
            Liked your post
          </span>
        </div>
      </div>

      <button
        className="h-8 px-6 text-sm bg-cyan-500 rounded-md"
        onClick={() => setShowPost(!showPost)}
      >
        View
      </button>
      {showPost && (
        <>
          <div className="absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-20" />
          <div className="absolute top-0 left-0 w-screen h-screen flex place-items-center justify-center ">
            <div className="flex flex-col justify-center w-screen h-[500px] place-items-center bg-neutral-950 ">
              <button onClick={() => setShowPost(false)}>Exist</button>
              <ProfilePostCard post={post} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityLikedCard;
