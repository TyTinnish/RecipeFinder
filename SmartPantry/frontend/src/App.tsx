import { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainApp from './components/MainApp';

export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'app'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('app');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const handleGoToRegister = () => {
    setCurrentView('register');
  };

  const handleGoToLogin = () => {
    setCurrentView('login');
  };

  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} onGoToRegister={handleGoToRegister} />;
  }

  if (currentView === 'register') {
    return <RegisterPage onRegister={handleLogin} onGoToLogin={handleGoToLogin} />;
  }

  return <MainApp onLogout={handleLogout} />;
}
