import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage'; // Página de login
import SignupPage from './pages/SignupPage'; // Página de registro
import HomePage from './pages/HomePage'; // Página de inicio

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
            <Route path="/login" element={<LoginPage />} /> {/* Página de login */}
            <Route path="/signup" element={<SignupPage />} /> {/* Página de registro */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
