import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/profile.png";
import followUser from "@/app/actions/followUser";
import redirectToSignIn from "@/app/actions/redirectToSignIn";
const ActivityFollowsCard = ({ currentUser, user }: any) => {
  const onHandleFollowUser = async () => {
    console.log(user);
    if (!user) {
      redirectToSignIn();
      return;
    }
    followUser(user._id);
    // followUser("66c482be3a5df48bf52cfddf");
  };
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
            Followed You
          </span>
        </div>
      </div>

      <button
        className="h-8 px-6 text-sm bg-cyan-500 rounded-md"
        onClick={onHandleFollowUser}
      >
        {/* 
        // if logged user follows another user = unfollow
        // if logged user and other user do not follow each other = follow
        // if logged user does not follow the other user who is follow the logged user = follow back
        
         */}
        {user.followings.includes(currentUser._id) &&
          currentUser.followings.includes(user._id) &&
          "Unfollow"}
        {user.followings.includes(currentUser._id) &&
          !currentUser.followings.includes(user._id) &&
          "Follow Back"}
        {!user.followings.includes(currentUser._id) &&
          !currentUser.followings.includes(user._id) &&
          "Follow"}
      </button>
    </div>
  );
};

export default ActivityFollowsCard;
