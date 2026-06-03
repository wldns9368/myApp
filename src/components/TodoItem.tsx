import React from 'react';
import { type Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="card flex-between" style={{ padding: '1rem', marginBottom: '0.75rem' }}>
      <div 
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', flex: 1 }}
        onClick={() => toggleTodo(todo.id)}
      >
        <div style={{ color: todo.completed ? '#22c55e' : '#94a3b8', display: 'flex', alignItems: 'center' }}>
          {todo.completed ? <CheckCircle size={22} /> : <Circle size={22} />}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#94a3b8' : '#1e293b', fontWeight: 500 }}>
            {todo.text}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>{todo.createdAt}</span>
        </div>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px', borderRadius: '6px' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};