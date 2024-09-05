import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/profile.png";
import { getSessionUser } from "@/utils/getSessionUser";
import { UserInterface } from "@/types/types";

const ProfileHeader = async ({ user }: any) => {
  const { user: googleUser } = (await getSessionUser()) as UserInterface;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex place-items-center gap-2">
        <Image
          src={user.image || googleUser?.image || profileImg}
          alt=""
          width={40}
          height={40}
          className="size-14 rounded-full bg-white"
        />
        <div className="flex flex-col">
          <span className="font-bold">{user.name}</span>
          <span className="text-neutral-400 font-bold">@{user.username}</span>
        </div>
      </div>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileHeader;
