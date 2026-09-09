import { z } from "zod";

export const createTodoSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Task title cannot be empty"),
    description: z.string().optional(),
  }),
});

export const updateTodoSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Todo ID"),
  }),
  body: z.object({
    title: z.string().trim().min(1, "Task title cannot be empty"),
    description: z.string().optional(),
  }),
});

export const todoIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Todo ID"),
  }),
});
