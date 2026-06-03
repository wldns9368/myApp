import React from 'react';
import { useTodo } from '../context/TodoContext';
import { ListTodo, CheckCircle2, BarChart2 } from 'lucide-react';

export const Home: React.FC = () => {
  const { todos } = useTodo();

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="container">
      <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: 'white', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.75rem' }}>개인 일정 대시보드 🚀</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>전역 상태 데이터를 연동하여 실시간 현황을 측정합니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ListTodo size={24} style={{ color: '#4f46e5' }} />
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>할 일 목록</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{active}개</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle2 size={24} style={{ color: '#22c55e' }} />
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>완료된 일</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{completed}개</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BarChart2 size={24} style={{ color: '#7c3aed' }} />
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>종합 달성률</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{rate}%</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>진행 상태 통계</span>
          <span style={{ fontWeight: 'bold', color: '#4f46e5' }}>{rate}% 완료</span>
        </div>
        <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '9999px', height: '12px', overflow: 'hidden' }}>
          <div style={{ width: `${rate}%`, background: '#4f46e5', height: '100%', transition: 'width 0.4s ease' }} />
        </div>
      </div>
    </div>
  );
};