import Image from "next/image";
import profileImg from "@/assets/images/profile.png";

const ProfilePostCard = ({ post, user }: any) => {
  return (
    <div className=" flex gap-4 p-6 bg-neutral-900 rounded-xl">
      <div className="flex flex-col gap-1">
        <Image
          src={user?.image || profileImg}
          alt=""
          width={40}
          height={40}
          className="size-10 flex-none rounded-full bg-red-300"
        />
        <div className="h-full flex justify-center">
          <div className="border-l border-neutral-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span>@{post.username}</span>
        <p>{post.text}</p>

        <div className="flex gap-4">
          <span>{post.likes.length} likes</span>
          <span>reply</span>
          <span>share</span>
          <span>save</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePostCard;
