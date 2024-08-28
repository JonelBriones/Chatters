import User from "@/models/User.js";

export const getUserFollowings = async (id) => {
  return await User.find({ followings: id }).lean();
};
