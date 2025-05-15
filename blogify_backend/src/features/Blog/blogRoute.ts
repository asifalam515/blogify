/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from "express";
import { blogService } from "./blogService";
const router = express.Router();
// router for post a blog
router.post("/create-blog", blogService.postBlog);
// get all blogs
router.get("/", async (req: Request, res: Response) => {});
// get single blog
router.get("/:id", async (req: Request, res: Response) => {});
// update a blog
router.put("/:id", async (req: Request, res: Response) => {});
// delete a blog
router.delete("/:id", async (req: Request, res: Response) => {});
export const blogRouter = router;
