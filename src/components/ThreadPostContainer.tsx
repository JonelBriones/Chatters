import Image from "next/image";
import profileImg from "@/assets/images/profile.png";
import connectDB from "@/config/database";
import User from "@/models/User";
import PostButtons from "./PostButtons";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
const ThreadPostContainer = async ({ post }: any) => {
  await connectDB();
  const postOwner = await User.findById(post.owner);
  // console.log("postowner", postOwner);

  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  // const isoDate = "2024-08-20T11:14:58.140+00:00";
  const isoDate = post.createdAt;
  const pastDate = dayjs(isoDate);
  const currentDate = dayjs();

  // Calculate the difference
  const diff = dayjs.duration(currentDate.diff(pastDate));

  // Format the output
  const timeDifference = `${diff.years()} years, ${diff.months()} months, ${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, ${diff.seconds()} seconds`;

  let format;
  format =
    (diff.years() > 0 && `${diff.years()} years ago`) ||
    (diff.months() > 0 && `${diff.months()} months ago`) ||
    (diff.days() > 0 && `${diff.days()} days ago`) ||
    (diff.hours() > 0 && `${diff.hours()} hours ago`) ||
    (diff.minutes() > 0 && `${diff.minutes()} minutes ago`) ||
    (diff.seconds() < 59 && `${diff.seconds()} seconds ago`);

  return (
    <div className=" flex gap-4 p-6 bg-neutral-900 rounded-xl">
      <div className="flex flex-col gap-1">
        <Image
          src={postOwner?.image || profileImg}
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
        <span>
          <Link href={`/profile/${postOwner._id}`}>@{post.username} </Link>
          <span className="text-sm text-gray-400">{format}</span>
        </span>
        <p>{post.text}</p>

        <PostButtons post={post} />
      </div>
    </div>
  );
};

export default ThreadPostContainer;
