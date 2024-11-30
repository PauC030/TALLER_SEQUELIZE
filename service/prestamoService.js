const Prestamo = require('../models/prestamo');

class PrestamoService {
  static async crearPrestamo(data) {
    return await Prestamo.create(data);
  }

  static async obtenerPrestamos() {
    return await Prestamo.findAll();
  }

  static async actualizarPrestamo(id, datos) {
    try {
      const [actualizar] = await Prestamo.update(datos, { where: { id } }); 
      if (actualizar === 0) { 
        return { mensaje: 'Préstamo no encontrado' }; 
      } else {
        return { mensaje: 'Préstamo actualizado exitosamente' }; 
      }
    } catch (e) {
      console.error('Error al actualizar el préstamo:', e);
  }
}

       static async eliminarPrestamo(id){
        try{
         let borrar = await Prestamo.destroy({where:{id}});
           if(borrar == 0){console.log("no se encontro el libro a eliminar")
         }
        else {
         return borrar;
       }
      } catch(e){
      }
    } 
    
    static async obtenerPrestamosMasRecientes() {
      try {
        const prestamosRecientes = await Prestamo.findAll({
          order: [['fechaPrestamo', 'DESC']], 
          limit: 5 
        });
  
        return prestamosRecientes;
      } catch (e) {
        console.error('Error al obtener los préstamos más recientes:', e);
        throw e;
      }
    }

}

module.exports = PrestamoService;
