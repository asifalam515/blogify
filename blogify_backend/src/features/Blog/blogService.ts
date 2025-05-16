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
const postBlogs = async (req: Request, res: Response) => {
  try {
    const newPosts = await BlogModel.insertMany(req.body);
    res.status(200).json({
      message: "Multiple posted",
      data: newPosts,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({
      message: "Retrive all blogs",
      data: blogs,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// get single blog by id
const getBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const blog = await BlogModel.find({ _id: id });
    res.status(200).json({
      message: "single blog retrieve",
      data: blog,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const blogService = { postBlog, postBlogs, getBlogs, getBlog };
