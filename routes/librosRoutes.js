const express = require('express');
const router = express.Router();

const LibroController = require('../controller/libroController');

router.post('/libro', LibroController.crearLibro);          // Crear un nuevo libro
router.get('/libro', LibroController.obtenerLibros);        // Obtener todos los libros
router.put('/libro/:id', LibroController.actualizarLibro);   // Actualizar un libro por ID
router.delete('/libro/:id', LibroController.eliminarLibro);   // Eliminar un libro por ID
router.get('/librosM', LibroController.obtenerLibrosMasSolicitados);

module.exports = router;
