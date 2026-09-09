import { Request, Response, NextFunction } from "express";
import { z, ZodType } from "zod";

export const validateRequest =
  (schema: ZodType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: error.issues.map((e) => e.message).join(", "),
        });
      }
      return res.status(400).json({ error: "Invalid request data" });
    }
  };
