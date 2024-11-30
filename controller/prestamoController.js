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
        res.json(prestamo); 
      } else {
        res.json({ error: 'Prestamo no encontrado' }); 
      }
    } catch (e) {
      console.error(e); 
      res.json({ error: 'Error al actualizar el prestamo' }); 
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
