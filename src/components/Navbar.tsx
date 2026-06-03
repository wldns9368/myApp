import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare, LayoutDashboard, Archive } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
    color: isActive(path) ? '#4f46e5' : '#64748b',
    fontWeight: isActive(path) ? '700' : '500',
  });

  return (
    <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 0' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#4f46e5', fontSize: '1.25rem', fontWeight: 'bold' }}>
          <CheckSquare size={24} />
          <span>Jiwoon-SmartTodo</span>
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={linkStyle('/')}>
            <LayoutDashboard size={18} />
            <span>대시보드</span>
          </Link>
          <Link to="/todos" style={linkStyle('/todos')}>
            <CheckSquare size={18} />
            <span>할 일 관리</span>
          </Link>
          <Link to="/archive" style={linkStyle('/archive')}>
            <Archive size={18} />
            <span>보관소</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};