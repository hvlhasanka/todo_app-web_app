import { useState } from 'react';
import { Pencil, Trash2, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { Todo } from '../types';

interface TodoCardProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onSaveEdit: (id: string, newTitle: string, newDescription?: string) => void;
  onError: (message: string) => void;
}

interface EditFormData {
  title: string;
  description: string;
}

export function TodoCard({ todo, onToggle, onDelete, onSaveEdit, onError }: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const { register, handleSubmit, reset, formState: { isDirty } } = useForm<EditFormData>({
    defaultValues: { 
      title: todo.title, 
      description: todo.description || '' 
    }
  });

  const handleStartEdit = () => {
    reset({ title: todo.title, description: todo.description || '' });
    setIsEditing(true);
  };

  const onSubmit = (data: EditFormData) => {
    onSaveEdit(todo._id, data.title, data.description);
    setIsEditing(false);
  };

  const onInvalid = (errors: any) => {
    if (errors.title?.message) {
      onError(errors.title.message);
    }
  };

  const handleCancelEdit = () => {
    if (isDirty) {
      if (!window.confirm('Changes will be discarded, do you wish to continue?')) {
        return;
      }
    }
    setIsEditing(false);
    reset();
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo._id)}
          className="w-5 h-5 accent-gray-500 cursor-pointer rounded-sm"
        />
        {isEditing ? (
          <form id={`edit-form-${todo._id}`} onSubmit={handleSubmit(onSubmit, onInvalid)} className="ml-4 flex flex-col flex-1 mr-4 gap-2">
            <input
              type="text"
              {...register('title', {
                validate: (value) => value.trim().length > 0 || 'TODO title cannot be empty.'
              })}
              className="border-b border-gray-300 text-sm focus:outline-none text-gray-700 w-full"
            />
            <input
              type="text"
              {...register('description')}
              className="border-b border-gray-300 text-xs focus:outline-none text-gray-500 w-full"
            />
          </form>
        ) : (
          <div className="ml-4 flex flex-col flex-1">
            <span
              className={`text-sm font-medium ${
                todo.done ? 'line-through text-gray-300' : 'text-gray-600'
              }`}
            >
              {todo.title}
            </span>
            {todo.description && (
              <span
                className={`text-xs mt-0.5 ${
                  todo.done ? 'line-through text-gray-200' : 'text-gray-400'
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
              type="submit"
              form={`edit-form-${todo._id}`}
              className="text-green-500 hover:text-green-600 px-2 transition-colors flex items-center justify-center font-semibold text-sm cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
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
          onClick={() => onDelete(todo._id)}
          className="text-gray-400 hover:text-red-500 px-2 transition-colors flex items-center justify-center cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
