import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string, description: string) => void;
  onError: (message: string) => void;
}

export function TodoInput({ onAdd, onError }: TodoInputProps) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!text.trim()) {
      onError('TODO title cannot be empty.');
      return;
    }
    onAdd(text, description);
    setText('');
    setDescription('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-end mb-3 gap-4">
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          type="text"
          placeholder="Title"
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAdd();
          }}
        />
      </div>
      <div className="flex-1 w-full border-b border-gray-300 pb-2">
        <input
          type="text"
          placeholder="Description (optional)"
          className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAdd();
          }}
        />
      </div>
      <button
        onClick={handleAdd}
        className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-4 h-8 rounded-lg flex items-center justify-center shadow-sm transition-colors mt-2 sm:mt-0 cursor-pointer"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}

