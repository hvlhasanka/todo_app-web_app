import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically handles createdAt and updatedAt
  },
);

export const Todo = mongoose.model<ITodo>("Todo", todoSchema);
