import { Plus, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TodoInputProps {
  onAdd: (text: string, description: string) => void;
  onError: (message: string) => void;
  isLoading?: boolean;
}

interface FormData {
  text: string;
  description: string;
}

export function TodoInput({ onAdd, onError, isLoading }: TodoInputProps) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { text: '', description: '' }
  });

  const onSubmit = (data: FormData) => {
    onAdd(data.text, data.description);
    reset();
  };

  const onInvalid = (errors: any) => {
    if (errors.text?.message) {
      onError(errors.text.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="flex flex-col sm:flex-row items-end mb-3 gap-4">
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          {...register('text', {
            validate: (value) => value.trim().length > 0 || 'TODO title cannot be empty.'
          })}
          type="text"
          placeholder="Title"
          disabled={isLoading}
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent disabled:opacity-50"
        />
      </div>
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          {...register('description')}
          type="text"
          placeholder="Description (optional)"
          disabled={isLoading}
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 h-8 rounded-lg flex items-center justify-center shadow-sm transition-colors mt-2 sm:mt-0 cursor-pointer disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
      </button>
    </form>
  );
}

