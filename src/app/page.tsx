import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar/Navbar";
import ThreadPostContainer from "./components/Thread/ThreadPostContainer";

type Thread = {
  name: string;
};

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col  gap-8 m-8">
        <h1>Home Page</h1>
        <ThreadPostContainer name={"jonel"} />
        <ThreadPostContainer name={"jo"} />
        <ThreadPostContainer thread={"jon"} />
      </div>
    </main>
  );
}
