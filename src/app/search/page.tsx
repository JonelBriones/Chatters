import Search from "@/components/Search";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import React from "react";

const page = async () => {
  await connectDB();
  const users = await User.find({}).lean();
  return <Search users={JSON.parse(JSON.stringify(users))} />;
};

export default page;
