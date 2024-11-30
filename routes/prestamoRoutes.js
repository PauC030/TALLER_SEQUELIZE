const express = require('express');
const router = express.Router();

const PrestamoController = require('../controller/prestamoController');

router.post('/prestamo', PrestamoController.crearPrestamo);          // Crear un nuevo préstamo
router.get('/prestamo', PrestamoController.obtenerPrestamos);        // Obtener todos los préstamos
router.put('/prestamo/:id', PrestamoController.actualizarPrestamo);   // Actualizar un préstamo por ID
router.delete('/prestamo/:id', PrestamoController.eliminarPrestamo);   // Eliminar un préstamo por ID
router.get('/prestamosR', PrestamoController.obtenerPrestamosMasRecientes);
module.exports = router;
