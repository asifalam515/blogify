import express, { Request, Response } from "express";
import { BlogModel } from "./blogModel";
const postBlog = async (req: Request, res: Response) => {
  try {
    const newPost = new BlogModel(req.body);
    const savedItem = await newPost.save();
    res.status(200).json({
      message: "single blog posted",
      data: savedItem,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const blogService = { postBlog };
