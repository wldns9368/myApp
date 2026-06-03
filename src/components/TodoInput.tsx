import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Plus } from 'lucide-react';

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새로운 할 일을 입력하세요..."
        style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
      />
      <button
        type="submit"
        style={{ padding: '0.75rem 1.25rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}
      >
        <Plus size={18} />
        <span>추가</span>
      </button>
    </form>
  );
};