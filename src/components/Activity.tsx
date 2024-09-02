"use client";
import React, { useEffect, useState } from "react";
import ActivityFollowsCard from "./ActivityFollowsCard";
import ActivityLikedCard from "./ActivityLikedCard";

const Activity = ({ user, users, posts }: any) => {
  const [toggleType, setToggleType] = useState("likes");
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Activity</h1>
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
            user._id != u._id &&
            u.followings.includes(user._id) && (
              <ActivityFollowsCard key={user._id} currentUser={user} user={u} />
            )
        )}
      {toggleType == "likes" &&
        posts.map((post: any) =>
          post.owner == user._id
            ? users.map(
                (u: any) =>
                  user._id != u._id && (
                    <ActivityLikedCard
                      key={user._id}
                      currentUser={user}
                      user={u}
                      post={post}
                    />
                  )
              )
            : null
        )}
    </div>
  );
};

export default Activity;
