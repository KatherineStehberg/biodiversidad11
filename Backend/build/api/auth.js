"use strict";

var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');

// Endpoint para login de usuario
router.post('/login', authController.login);

// Endpoint para registro de usuario (opcional si lo manejas en otro archivo)
router.post('/signup', authController.signup);
module.exports = router;