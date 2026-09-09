import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import todoRoutes from "./routes/todoRoutes";
import { globalLimiter } from "./middlewares/rateLimiter";
import { corsMiddleware } from "./middlewares/corsConfig";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(corsMiddleware);
app.use(express.json());
app.use(globalLimiter);

// Health check route
app.get("/health-check", (req: Request, res: Response) => {
  res.send("TODO Web App - Server Live");
});

// API Routes
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
