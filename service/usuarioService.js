const libro = require('../models/libro');
const Prestamo = require('../models/prestamo');
const Usuario = require('../models/usuario');

class UsuarioService {
  static async crearUsuario(data) {
    return await Usuario.create(data);
  }

  static async obtenerUsuarios() {
    return await Usuario.findAll();
  }

  static async actualizarUsuario(id, data) {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      return await usuario.update(data);
    }
    return null;
  }

  static async eliminarUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      return true;
    }
    return false;
  }


   
 

}
module.exports = UsuarioService;
