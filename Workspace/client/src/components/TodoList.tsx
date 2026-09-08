import type { Todo } from '../data/mockTodos';
import { TodoCard } from './TodoCard';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onSaveEdit: (id: number, newText: string, newDescription?: string) => void;
}

export function TodoList({ todos, onToggle, onDelete, onSaveEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 italic">
        You have no todos yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </div>
  );
}

