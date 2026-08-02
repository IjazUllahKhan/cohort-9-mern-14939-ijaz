import { Router } from "express";

const router = Router();

router.post("/register", async (_req, res) => {
  res
    .status(201)
    .json({ success: true, data: { message: "User registered successfully" } });
});
