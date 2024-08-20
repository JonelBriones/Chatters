import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SearchProfileCard = ({ user }: any) => {
  const { data: session } = useSession();
  let isFollowing = user.followers.includes(session?.user.id);
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
          <span className="text-sm text-neutral-400 font-bold">
            @{user.username}
          </span>
        </div>
      </div>
      {isFollowing ? (
        <div className="flex flex-row gap-2">
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            unfollow
          </button>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      ) : user._id == session?.user.id ? (
        <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
          View
        </button>
      ) : (
        <div className="flex flex-row gap-2">
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            Follow
          </button>
          <button className="h-8 px-6 text-sm bg-cyan-500 rounded-md">
            View
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchProfileCard;
