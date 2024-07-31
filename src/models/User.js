import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
    required: [false],
  },
  posts: {
    type: String,
    required: [false],
  },
  replies: {
    type: String,
    required: [false],
  },
  repost: {
    type: String,
    required: [false],
  },
});

const User = models.User || model("User", UserSchema);
export default User;
