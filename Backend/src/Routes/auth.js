const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');

// Login de usuario
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario existe
    const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];

    // Compara la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera el token JWT
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respuesta exitosa
    res.json({ 
      message: 'Autenticación exitosa',
      token,
      user: { id: user.id, username: user.username }
    });
  } catch (err) {
    console.error('Error en el login:', err.message);
    res.status(500).json({ error: 'Ocurrió un error en el login', details: err.message });
  }
});

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario ya existe
    const { rows: existingUser } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserta el nuevo usuario
    const { rows: newUser } = await db.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );

    // Respuesta exitosa
    res.status(201).json({ 
      message: 'Usuario registrado exitosamente', 
      user: newUser[0]
    });
  } catch (err) {
    console.error('Error en el registro:', err.message);
    res.status(500).json({ error: 'Ocurrió un error en el registro', details: err.message });
  }
});

module.exports = router;
