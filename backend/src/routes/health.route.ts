import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  return res.success({ message: "API is healthy" });
});

export default router;
