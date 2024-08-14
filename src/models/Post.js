import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: [true],
    },
    text: {
      type: String,
      required: [true],
    },
    images: [
      {
        type: String,
        required: [false],
      },
    ],
    likes: [
      {
        type: String,
        required: [false],
      },
    ],
    replies: [
      {
        owner: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: [true],
        },
        text: {
          type: String,
          required: [true],
        },
      },
    ],
  },
  { timestamp: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
