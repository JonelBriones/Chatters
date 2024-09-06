import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/profile.png";
import Link from "next/link";
const ActivityLikedCard = ({ currentUser, user, post }: any) => {
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
      <Link
        href={`${post._id}`}
        className="h-8 px-6 text-sm flex place-items-center bg-cyan-500 rounded-md"
      >
        View
      </Link>
    </div>
  );
};

export default ActivityLikedCard;
