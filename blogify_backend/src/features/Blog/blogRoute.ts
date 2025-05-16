/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from "express";
import { blogService } from "./blogService";
const router = express.Router();
// router for post a blog
router.post("/create-blog", blogService.postBlog);
// post multiple blog at the same time
router.post("/create-blogs", blogService.postBlogs);
// get all blogs
router.get("/", blogService.getBlogs);
// get single blog
router.get("/:id", blogService.getBlog);
// update a blog
router.put("/:id", async (req: Request, res: Response) => {});
// delete a blog
router.delete("/:id", async (req: Request, res: Response) => {});
export const blogRouter = router;
