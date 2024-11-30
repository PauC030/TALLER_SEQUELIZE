const PrestamoService = require('../service/prestamoService');

class PrestamoController {
  static async crearPrestamo(req, res) {
    try {
      const prestamo = await PrestamoService.crearPrestamo(req.body);
      res.json(prestamo);
    } catch (e) {
      res.json({ error: 'Error al crear el préstamo' });
    }
  }

  static async obtenerPrestamos(req, res) {
    try {
      const prestamos = await PrestamoService.obtenerPrestamos();
      res.json(prestamos);
    } catch (e) {
      res.json({ error: 'Error al obtener los préstamos' });
    }
  }

  static async actualizarPrestamo(req, res) {
    try {
      const prestamo = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
      if (prestamo) {
        res.json(prestamo); // Devuelve el objeto actualizado
      } else {
        res.status(404).json({ error: 'Prestamo no encontrado' }); // Usa un estado 404
      }
    } catch (e) {
      console.error(e); // Registro del error para depuración
      res.status(500).json({ error: 'Error al actualizar el prestamo' }); // Estado 500 para errores internos
    }
  }
  

   static async eliminarPrestamo (req, res) {
    try{
        const eliminado = await PrestamoService.eliminarPrestamo(req.params.id);
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
   static async obtenerPrestamosMasRecientes(req, res) {
    try {
      const prestamos = await PrestamoService.obtenerPrestamosMasRecientes();
      res.json(prestamos);
    } catch (e) {
      res.json({ error: 'Error al obtener los préstamos más recientes' });
    }
  }

}

module.exports = PrestamoController;
