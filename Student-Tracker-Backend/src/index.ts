import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { connectDB } from "./config/db.js";
import { routeNotFound } from "./middlewares/route-not-found.middleware.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

connectDB(); //connect database

app.use("/api/students", studentRoutes);

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost: ${PORT}`);
});
