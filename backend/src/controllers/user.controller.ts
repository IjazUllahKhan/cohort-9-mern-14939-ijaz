import { Request, Response } from "express";
import { registerUser } from "../services/user.service";

export const register = async (req: Request, res: Response) => {
  const newUser = await registerUser(req.body);
  return res.sendResponse(201, {
    success: true,
    message: "User Created successfully",
    data: newUser,
  });
};
