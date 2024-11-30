const express = require('express');
const router = express.Router();

const UsuarioController = require('../controller/usuarioController');

router.post('/usuario', UsuarioController.crearUsuario);
router.get('/usuario', UsuarioController.obtenerUsuarios);
router.put('/usuario/:id', UsuarioController.actualizarUsuario);
router.delete('/usuario/:id', UsuarioController.eliminarUsuario);

module.exports = router;
