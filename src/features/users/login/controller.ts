import { Request, Response } from "express";
import { loginService } from "./service";

export const loginController = async (req: Request, res: Response) => {
  try {
    let result = await loginService(req.body.email, req.body.password);
    res.json(result);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};