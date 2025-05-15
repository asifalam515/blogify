import express, { Request, Response } from "express";
import cors from "cors";
import { blogRouter } from "./features/Blog/blogRoute";
const app = express();
app.use(express.json());
app.use(cors());
// routers
app.use("/api/blogs", blogRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello next level Developer");
});
export default app;
