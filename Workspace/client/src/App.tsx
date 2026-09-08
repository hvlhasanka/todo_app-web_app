import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, createTodo } from './services/api/todoApi';
import { Banner } from './components/Banner';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

export default function App() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setSuccess('New TODO added successfully!');
    },
    onError: () => {
      setError('Failed to create TODO. Please try again later.');
    },
  });

  const remainingCount = todos.filter((t) => !t.done).length;

  const handleSaveEdit = (id: string, newTitle: string, newDescription?: string) => {};

  const handleError = (message: string) => {
    setError(message);
    setSuccess(null);
  };

  const handleAddTodo = (title: string, description: string) => {
    setError(null);
    createMutation.mutate({ title, description });
  };

  const toggleTodo = (id: string) => {};

  const deleteTodo = (id: string) => {};

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans relative">
      <Banner message={error} variant="error" onClose={() => setError(null)} />
      <Banner message={success} variant="success" onClose={() => setSuccess(null)} />

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-700 mb-10 tracking-tight">Your TODO List</h1>

        <TodoInput onAdd={handleAddTodo} onError={handleError} isLoading={createMutation.isPending} />
        
        <p className="text-sm font-bold text-gray-700 mt-6 mb-2">
          Your remaining todos: {remainingCount}
        </p>

        <TodoList 
          todos={todos}
          isLoading={isLoading}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onSaveEdit={handleSaveEdit}
        />
      </div>
    </div>
  );
}
