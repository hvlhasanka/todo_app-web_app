import { Todo, ITodo } from "../models/Todo";

/**
 * Fetches all todos from the database, sorted by newest first
 */
export const getAllTodos = async (): Promise<ITodo[]> => {
  return await Todo.find().sort({ createdAt: -1 });
};

/**
 * Creates a new todo item
 */
export const createTodo = async (data: Partial<ITodo>): Promise<ITodo> => {
  const newTodo = new Todo(data);
  return await newTodo.save();
};

/**
 * Updates a todo item (title and description)
 */
export const updateTodo = async (
  id: string,
  data: Partial<ITodo>,
): Promise<ITodo | null> => {
  return await Todo.findByIdAndUpdate(
    id,
    { title: data.title, description: data.description },
    { returnDocument: "after", runValidators: true },
  );
};

/**
 * Toggles the done field of a todo item
 */
export const toggleTodo = async (id: string): Promise<ITodo | null> => {
  const todo = await Todo.findById(id);
  if (!todo) return null;

  todo.done = !todo.done;
  return await todo.save();
};

/**
 * Deletes a todo item
 */
export const deleteTodo = async (id: string): Promise<ITodo | null> => {
  return await Todo.findByIdAndDelete(id);
};
