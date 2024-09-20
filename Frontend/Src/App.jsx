import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import SliderSection from './components/SliderSection';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedServices from './components/FeaturedServices';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage'; // Importa tu página de Login
import SignupPage from './pages/SignupPage'; // Importa tu página de Signup
import HomePage from './pages/HomePage'; // Importa tu página de inicio

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
            <Route path="/login" element={<LoginPage />} /> {/* Ruta para Login */}
            <Route path="/signup" element={<SignupPage />} /> {/* Ruta para Registro */}
          </Routes>
          <SliderSection />
          <FeaturedProducts />
          <FeaturedServices />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
