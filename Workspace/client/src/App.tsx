import { useState } from 'react';
import type { Todo } from './types';
import { Banner } from './components/Banner';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const remainingCount = todos.filter((t) => !t.completed).length;

  const handleSaveEdit = (id: number, newText: string, newDescription?: string) => {
    if (!newText.trim()) {
      setError('TODO title cannot be empty.');
      return;
    }
    setTodos(
      todos.map((t) =>
        t.id === id
          ? { ...t, text: newText.trim(), description: newDescription?.trim() || undefined }
          : t
      )
    );
    setSuccess('TODO updated successfully!');
  };

  const handleError = (message: string) => {
    setError(message);
    setSuccess(null);
  };

  const handleAddTodo = (text: string, description: string) => {
    setError(null);
    setTodos([
      ...todos,
      { 
        id: Date.now(), 
        text: text.trim(), 
        description: description.trim() || undefined,
        completed: false 
      },
    ]);
    setSuccess('New todo added successfully!');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
      setSuccess('TODO deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans relative">
      <Banner message={error} variant="error" onClose={() => setError(null)} />
      <Banner message={success} variant="success" onClose={() => setSuccess(null)} />

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-700 mb-10 tracking-tight">Your TODO List</h1>

        <TodoInput onAdd={handleAddTodo} onError={handleError} />
        
        <p className="text-sm font-bold text-gray-700 mt-6 mb-2">
          Your remaining todos: {remainingCount}
        </p>

        <TodoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onSaveEdit={handleSaveEdit}
        />
      </div>
    </div>
  );
}
