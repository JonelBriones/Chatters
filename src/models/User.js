import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
    },
    image: {
      type: String,
    },
    bio: {
      type: String,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    // replies: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Reply",
    //   },
    // ],
    repost: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;
