import { useState } from 'react';
import { Pencil, Trash2, X } from 'lucide-react';
import type { Todo } from '../data/mockTodos';

interface TodoCardProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onSaveEdit: (id: number, newText: string, newDescription?: string) => void;
}

export function TodoCard({ todo, onToggle, onDelete, onSaveEdit }: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
    setEditDescription(todo.description || '');
  };

  const handleSave = () => {
    onSaveEdit(todo.id, editText, editDescription);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-gray-500 cursor-pointer rounded-sm"
        />
        {isEditing ? (
          <div className="ml-4 flex flex-col flex-1 mr-4 gap-2">
            <input
              type="text"
              className="border-b border-gray-300 text-sm focus:outline-none text-gray-700 w-full"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <input
              type="text"
              className="border-b border-gray-300 text-xs focus:outline-none text-gray-500 w-full"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
        ) : (
          <div className="ml-4 flex flex-col flex-1">
            <span
              className={`text-sm font-medium ${
                todo.completed ? 'line-through text-gray-300' : 'text-gray-600'
              }`}
            >
              {todo.text}
            </span>
            {todo.description && (
              <span
                className={`text-xs mt-0.5 ${
                  todo.completed ? 'line-through text-gray-200' : 'text-gray-400'
                }`}
              >
                {todo.description}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600 px-2 transition-colors flex items-center justify-center font-semibold text-sm cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="text-gray-400 hover:text-red-500 px-2 transition-colors flex items-center justify-center cursor-pointer"
              title="Cancel"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <button
            onClick={handleStartEdit}
            className="text-gray-400 hover:text-blue-500 px-2 transition-colors flex items-center justify-center cursor-pointer"
          >
            <Pencil size={18} />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-400 hover:text-red-500 px-2 transition-colors flex items-center justify-center cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
