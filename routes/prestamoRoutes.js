const express = require('express');
const router = express.Router();

const PrestamoController = require('../controller/prestamoController');

router.post('/prestamo', PrestamoController.crearPrestamo);          
router.get('/prestamo', PrestamoController.obtenerPrestamos);       
router.put('/prestamo/:id', PrestamoController.actualizarPrestamo);   
router.delete('/prestamo/:id', PrestamoController.eliminarPrestamo);   
router.get('/prestamosR', PrestamoController.obtenerPrestamosMasRecientes);
module.exports = router;
