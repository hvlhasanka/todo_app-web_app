export type Todo = {
  id: number;
  text: string;
  description?: string;
  completed: boolean;
};

export const mockTodos: Todo[] = [
  { id: 1, text: 'This is an example of todo #1', description: 'This is a description for todo #1', completed: true },
  { id: 2, text: 'This is an example of todo #2', completed: false },
  { id: 3, text: 'This is an example of todo #3', description: 'Another sample description', completed: true },
  { id: 4, text: 'This is an example of todo #4', completed: false },
  { id: 5, text: 'This is an example of todo #5', completed: false },
];
