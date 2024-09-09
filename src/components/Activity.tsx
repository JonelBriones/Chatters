"use client";
import React, { useEffect, useState } from "react";
import ActivityFollowsCard from "./ActivityFollowsCard";
import ActivityLikedCard from "./ActivityLikedCard";

const Activity = ({ loggedUser, users, posts }: any) => {
  const [toggleType, setToggleType] = useState("likes");
  return (
    <div className="flex flex-col gap-4">
      <h1 className="hidden mb:block font-bold text-3xl">Activity</h1>
      <div className="flex">
        <button
          dir="ltr"
          className={`${
            toggleType == "likes" ? "bg-neutral-950" : "bg-neutral-900"
          } flex-1 py-2 rounded-s-md`}
          onClick={() => setToggleType("likes")}
        >
          Likes
        </button>
        <button
          className={`${
            toggleType == "followers" ? "bg-neutral-950" : "bg-neutral-900"
          } flex-1 py-2`}
          onClick={() => setToggleType("followers")}
        >
          New Followers
        </button>
      </div>
      {toggleType == "followers" &&
        users.map(
          (u: any) =>
            loggedUser._id != u._id &&
            u.followings.includes(loggedUser._id) && (
              <ActivityFollowsCard
                key={loggedUser._id}
                currentUser={loggedUser}
                user={u}
              />
            )
        )}
      {toggleType == "likes" &&
        posts?.map((post: any) =>
          users.map(
            (u: any) =>
              loggedUser._id != u._id &&
              post.likes.includes(u._id) && (
                <ActivityLikedCard
                  key={loggedUser._id}
                  currentUser={loggedUser}
                  user={u}
                  post={post}
                />
              )
          )
        )}
    </div>
  );
};

export default Activity;
