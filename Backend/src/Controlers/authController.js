const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');

async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario existe en la base de datos
    const query = 'SELECT * FROM users WHERE username = $1';
    const { rows } = await db.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];

    // Verificar si la contraseña coincide
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'default_secret', // Asegurarse de que JWT_SECRET esté configurado
      { expiresIn: '1h' }
    );

    // Enviar token al frontend
    res.json({
      message: 'Login exitoso',
      token,  // Se envía el token
      userId: user.id,  // Información adicional opcional
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error en el login' });
  }
}

module.exports = {
  login,
};
