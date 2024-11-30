const LibroService = require('../service/libroService');

class LibroController {
  static async crearLibro(req, res) {
    try {
      const libro = await LibroService.crearLibro(req.body);
      res.json(libro);
    } catch (e) {
      res.json({ error: 'Error al crear el libro' });
    }
  }

  static async obtenerLibros(req, res) {
    try {
      const libros = await LibroService.obtenerLibros();
      res.json(libros);
    } catch (e) {
      res.json({ error: 'Error al obtener los libros' });
    }
  }

  static async actualizarLibro(req, res) {
    try {
      const libro = await LibroService.actualizarLibro(req.params, req.body);
      if (libro) {
        res.json(libro);
      } else {
        res.json({ error: 'Libro no encontrado' });
      }
    } catch (e) {
      res.json({ error: 'Error al actualizar el libro' });
    }
  }

  // libroController.js
static async eliminarLibro  (req, res) {
    try{
        const eliminado = await LibroService.eliminarLibro(req.params.id);
        if(eliminado == 0){
            return res.json({mensaje:"categoria no eliminada o no encontrada"})    
        }
        else{
            return res.json({mensaje:"categoria eliminada correctamente"});
        }
    }
    catch(e){
        res.json({ error: 'Error al eliminar el libro' });
    }
   }

   static async obtenerLibrosMasSolicitados(req, res) {
    try {
      const libros = await LibroService.obtenerLibrosMasSolicitados();
      res.json(libros);
    } catch (e) {
      res.json({ error: 'Error al obtener los libros más solicitados' });
    }
  }
  
}

module.exports = LibroController;
