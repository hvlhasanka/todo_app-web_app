import { Todo, ITodo } from "../models/Todo";

/**
 * Fetches all todos from the database, sorted by newest first.
 */
export const getAllTodos = async (): Promise<ITodo[]> => {
  return await Todo.find().sort({ createdAt: -1 });
};
