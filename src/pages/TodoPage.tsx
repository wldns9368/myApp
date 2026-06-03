import React from 'react';
import { useTodo } from '../context/TodoContext';
import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';

export const TodoPage: React.FC = () => {
  const { todos } = useTodo();
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="container">
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>할 일 관리 목록</h2>
      <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>오늘 해야 할 최우선 과제들을 등록하세요.</p>
      
      <TodoInput />

      <div style={{ marginTop: '1rem' }}>
        {activeTodos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px', color: '#94a3b8', border: '2px dashed #e2e8f0' }}>
            남은 할 일이 없습니다! 자유를 만끽하거나 추가해 보세요.
          </div>
        ) : (
          activeTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};