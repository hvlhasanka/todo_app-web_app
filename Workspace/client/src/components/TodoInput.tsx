import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TodoInputProps {
  onAdd: (text: string, description: string) => void;
  onError: (message: string) => void;
}

interface FormData {
  text: string;
  description: string;
}

export function TodoInput({ onAdd, onError }: TodoInputProps) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { text: '', description: '' }
  });

  const onSubmit = (data: FormData) => {
    if (!data.text.trim()) {
      onError('Task title cannot be empty.');
      return;
    }
    onAdd(data.text, data.description);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-end mb-3 gap-4">
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          {...register('text')}
          type="text"
          placeholder="Title"
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
        />
      </div>
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          {...register('description')}
          type="text"
          placeholder="Description (optional)"
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-4 h-8 rounded-lg flex items-center justify-center shadow-sm transition-colors mt-2 sm:mt-0 cursor-pointer"
      >
        <Plus size={20} />
      </button>
    </form>
  );
}

