import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TalentPage from './pages/TalentPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'talent'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'services' && <ServicesPage onNavigate={setCurrentPage} />}
      {currentPage === 'talent' && <TalentPage onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
