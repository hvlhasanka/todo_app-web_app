import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri =
  process.env.MONGO_URI ||
  "mongodb://root:secret@localhost:27017/todo_app?authSource=admin";

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TODO Web App - Server Live");
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB via Mongoose");
    app.listen(port, () => {
      console.log(
        `Server is running at http://localhost:${port}`,
      );
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
