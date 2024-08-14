import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    replies: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = "models.Comment" || model("Comment", Schema);

export default Comment;
