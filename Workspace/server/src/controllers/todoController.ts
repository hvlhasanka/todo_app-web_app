import { Request, Response } from "express";
import * as todoData from "../data/todoData";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoData.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};
