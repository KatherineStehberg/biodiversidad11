import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el inicio de sesión
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Link to="/">Biodiversidad.cl</Link>
        </div>
      </nav>
      <section>
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <p className="subtext">¡Bienvenido de nuevo! Por favor, ingresa tus datos</p>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                <span className="gray-text">Correo Electrónico</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password">
                <span className="gray-text">Contraseña</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="gray-text">Recordar por 30 días</label>
              <Link to="#" className="forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit" className="purple-button">Iniciar Sesión</button>
          </form>
        </div>
      </section>
      <footer>
        <h2>Todos los derechos reservados</h2>
        <div className="socialmedia-icons">
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
