import type { Request, Response, NextFunction } from "express";

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(404).json({
      message: "Route Not Found",
    });
  } catch (error) {
    next();
  }
}
