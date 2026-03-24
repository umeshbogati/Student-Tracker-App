import { z } from "zod";

export const studentSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2),
  grade: z.string(),
  phone: z.string().min(7),
  rollNumber: z.number(),
  gender: z.enum(["Male", "Female"]),
  imageUrl: z.string().default(""),
  // address: z.string().optional(),
  // email: z.email().optional(),
});
