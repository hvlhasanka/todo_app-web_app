import type { Todo } from "../../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const API_URL = `${API_BASE_URL}/api/todos`;

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const createTodo = async (todo: { title: string; description?: string }): Promise<Todo> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json();
};

export const updateTodo = async (id: string, updates: { title: string; description?: string }): Promise<Todo> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Failed to update todo');
  return res.json();
};

export const toggleTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`${API_URL}/${id}/done`, {
    method: 'PATCH',
  });
  if (!res.ok) throw new Error('Failed to toggle todo');
  return res.json();
};

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete todo');
};
