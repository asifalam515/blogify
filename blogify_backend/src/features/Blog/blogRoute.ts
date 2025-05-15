/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from "express";
const router = express.Router();
// router for post a blog
router.post("/create-blog", async (req: Request, res: Response) => {});
// get all blogs
router.get("/", async (req: Request, res: Response) => {});
// get single blog
router.get("/:id", async (req: Request, res: Response) => {});
// update a blog
router.put("/:id", async (req: Request, res: Response) => {});
// delete a blog
router.delete("/:id", async (req: Request, res: Response) => {});
export const blogRouter = router;
