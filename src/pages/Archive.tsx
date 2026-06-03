import React from 'react';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from '../components/TodoItem';

export const Archive: React.FC = () => {
  const { todos } = useTodo();
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="container">
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>완료 보관소</h2>
      <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>성공적으로 끝마친 모든 히스토리 기록입니다.</p>

      <div>
        {completedTodos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px', color: '#94a3b8', border: '2px dashed #e2e8f0' }}>
            아직 완료 보관 처리된 일정이 없습니다.
          </div>
        ) : (
          completedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};