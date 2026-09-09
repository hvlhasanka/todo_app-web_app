import type { Todo } from '../types';
import { TodoCard } from './TodoCard';

interface TodoListProps {
  todos: Todo[];
  isLoading?: boolean;
  onToggle: (_id: string) => void;
  onDelete: (_id: string) => void;
  onSaveEdit: (_id: string, newText: string, newDescription?: string) => void;
  onError: (message: string) => void;
}

export function TodoList({ todos, isLoading, onToggle, onDelete, onSaveEdit, onError }: TodoListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white animate-pulse">
            <div className="flex items-center flex-1">
              <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
              <div className="ml-4 flex flex-col flex-1 gap-1">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        You have no TODOs yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onSaveEdit={onSaveEdit}
          onError={onError}
        />
      ))}
    </div>
  );
}

