const Libro = require('../models/libro');
const prestamo = require('../models/prestamo');
const Sequelize = require('sequelize')


class LibroService {
  static async crearLibro(data) {
    return await Libro.create(data);
  }

  static async obtenerLibros() {
    return await Libro.findAll();
  }

  static async actualizarLibro(id, data) {
    const libro = await Libro.findByPk(id);
    if (libro) {
      return await libro.update(data);
    }
    return null;
  }


  static async eliminarLibro(id){
    try{
     let borrar = await Libro.destroy({where:{id}});
       if(borrar == 0){console.log("no se encontro el libro a eliminar")
     }
    else {
     return borrar;
   }
  } catch(e){
  }
} 

static async obtenerLibrosMasSolicitados() {
    try {
      const librosSolicitados = await prestamo.findAll({
        attributes: ['libroId', [Sequelize.fn('COUNT', Sequelize.col('libroId')), 'cantidad']],
        group: ['libroId'],
        order: [[Sequelize.fn('COUNT', Sequelize.col('libroId')), 'DESC']],
        limit: 5, 
        include: {
          model: Libro,
          attributes: ['id', 'titulo'], 
        }
      });

      return librosSolicitados;
    } catch (e) {
      console.error('Error al obtener los libros más solicitados:', e);
      throw e;
    }
  }



}

module.exports = LibroService;
