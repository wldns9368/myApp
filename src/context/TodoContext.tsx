import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Todo } from '../types/todo';

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. 초기 상태를 로컬 스토리지에서 불러옴
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('my-todos');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. 할 일이 바뀔 때마다 로컬 스토리지에 자동 저장
  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  // 할 일 추가 함수
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(), // 유니크한 ID 생성
      text,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };
    // 기존에 있던 잘못된 setColors 줄을 제거하고 setTodos만 남겼습니다.
    setTodos(prev => [newTodo, ...prev]);
  };

  // 완료 여부 토글 함수
  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  // 할 일 삭제 함수
  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// 커스텀 훅
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used within a TodoProvider');
  return context;
};