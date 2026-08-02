import { Request, Response } from "express";
export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = { username, email, password };
    return res.sendResponse(201, user);
  } catch (err) {}
};
