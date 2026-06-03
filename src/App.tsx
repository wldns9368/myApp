
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { TodoPage } from './pages/TodoPage';
import { Archive } from './pages/Archive';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;