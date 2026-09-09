import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "../controllers/todoController";

import { validateRequest } from "../middlewares/validateRequest";
import {
  createTodoSchema,
  updateTodoSchema,
  todoIdSchema,
} from "../schemas/todoSchema";

const router = Router();

router.get("/", getTodos);
router.post("/", validateRequest(createTodoSchema), createTodo);
router.put("/:id", validateRequest(updateTodoSchema), updateTodo);
router.patch("/:id/done", validateRequest(todoIdSchema), toggleTodo);
router.delete("/:id", validateRequest(todoIdSchema), deleteTodo);

export default router;
