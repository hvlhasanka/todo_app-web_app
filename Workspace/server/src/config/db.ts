import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb://root:secret@localhost:27017/todo_app?authSource=admin";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB via Mongoose");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};
