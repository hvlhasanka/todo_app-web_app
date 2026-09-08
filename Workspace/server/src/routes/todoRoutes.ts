import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "../controllers/todoController";

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.patch("/:id/done", toggleTodo);
router.delete("/:id", deleteTodo);

export default router;
