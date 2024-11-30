const express = require('express');
const router = express.Router();

const LibroController = require('../controller/libroController');

router.post('/libro', LibroController.crearLibro);         
router.get('/libro', LibroController.obtenerLibros);        
router.put('/libro/:id', LibroController.actualizarLibro);   
router.delete('/libro/:id', LibroController.eliminarLibro);   
router.get('/librosM', LibroController.obtenerLibrosMasSolicitados);

module.exports = router;
