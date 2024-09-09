"use client";
import React from "react";
import ThreadPostContainer from "./ThreadPostContainer";
const ProfilePosts = ({ posts }: any) => {
  console.log("POST", posts);
  return (
    <div>
      {posts.length === 0 ?? (
        <>
          {posts?.map((post: any) => (
            <div key={post._id}>
              <ThreadPostContainer key={post._id} post={post} />
            </div>
          ))}
          :<>No posts made</>
        </>
      )}
    </div>
  );
};

export default ProfilePosts;
