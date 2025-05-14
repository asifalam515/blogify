import mongoose, { Schema } from "mongoose";
import { IBlog } from "../../types";
const blogSchema = new Schema<IBlog>(
  {
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    author: String,
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
const BlogModel = mongoose.model("Blog", blogSchema);
export const BlogModels = { BlogModel };
