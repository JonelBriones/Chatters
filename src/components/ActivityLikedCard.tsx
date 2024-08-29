import Image from "next/image";
import React, { useState } from "react";
import profileImg from "@/assets/images/profile.png";
import { MdCancel } from "react-icons/md";
import ProfilePostCard from "./ProfilePostCard";
const ActivityLikedCard = ({ currentUser, user, post }: any) => {
  const [showPost, setShowPost] = useState(false);
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
          <div className="absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-50" />
          <div className="absolute top-0 left-0 w-screen h-screen flex place-items-center justify-center ">
            <div className="relative">
              <MdCancel
                onClick={() => setShowPost(false)}
                className="absolute top-0 right-0 m-4 cursor-pointer"
                size={"1.5rem"}
              />
              <ProfilePostCard post={post} user={currentUser} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityLikedCard;
