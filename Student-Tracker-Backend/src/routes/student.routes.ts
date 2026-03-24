import { Router } from "express";

import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

import { validateBody } from "../middlewares/validate.middleware.js";
import { studentSchema } from "../schemas/student.schema.js";

const router: Router = Router();

router.post("/", validateBody(studentSchema), createStudent);

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.put("/:id", validateBody(studentSchema.partial()), updateStudent);

router.delete("/:id", deleteStudent);

export default router;
