/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from "express";
const router = express.Router();
// router for post a blog
router.post("/create-blog", async (req: Request, res: Response) => {});

export const blogRouter = router;
