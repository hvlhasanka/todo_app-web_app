import { Request, Response } from "express";
import * as todoData from "../data/todoData";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoData.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description = "" } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title are required" });
    }

    const newTodo = await todoData.createTodo({ title, description });
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to create todo item" });
  }
};

export const updateTodo = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await todoData.updateTodo(id, { title, description });

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to update todo item" });
  }
};

export const toggleTodo = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const updatedTodo = await todoData.toggleTodo(id);

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to toggle todo item status" });
  }
};

export const deleteTodo = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoData.deleteTodo(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    res.status(200).json({ message: "Todo item deleted successfully" });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to delete todo item" });
  }
};
