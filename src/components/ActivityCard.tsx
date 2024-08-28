import Image from "next/image";
import React from "react";

const ActivityCard = () => {
  return (
    <div>
      <div className="flex gap-2 place-items-center">
        <Image
          height={40}
          width={40}
          src={""}
          alt=""
          className="size-10 bg-red-50 rounded-full"
        />
        <div className="flex flex-col">
          {/* <span className="text-sm text-neutral-400">@{user.username}</span> */}
          <span className="text-sm text-neutral-400 font-bold">
            {/* @{user.username} */}
            @ijonel906
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
