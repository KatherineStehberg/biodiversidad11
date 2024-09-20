import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/Signup.css'; // Asegúrate de que el archivo CSS exista y esté correctamente referenciado

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        navigate('/login'); // Redirige al login después de un registro exitoso
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error al registrarse');
      }
    } catch (err) {
      setErrorMessage('Hubo un problema con el registro. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a href="/"><img src="../assets/logo.png" alt="Biodiversidad.cl" /></a>
        </div>
      </header>

      <main>
        <div className="signup-container">
          <h1>Crear una Cuenta</h1>
          <p>Únete a nuestra comunidad y colabora con los mejores expertos en medio ambiente.</p>

          <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />

            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />

            <button type="submit">Registrarse</button>
          </form>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
