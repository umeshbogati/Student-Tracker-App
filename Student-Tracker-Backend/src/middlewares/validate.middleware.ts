import type { Request, Response, NextFunction } from "express";
import type { z } from "zod";

export const validateBody =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    console.log(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation Error",
        errors: result.error,
      });
    }

    req.body = result.data;
    next();
  };

export const validateParams =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid Params",
        errors: result.error,
      });
    }

    next();
  };

export const validateQuery =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid Query",
        errors: result.error,
      });
    }

    next();
  };
