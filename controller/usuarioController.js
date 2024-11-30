const UsuarioService = require('../service/usuarioService');

class UsuarioController {
  static async crearUsuario(req, res) {
    try {
      const usuario = await UsuarioService.crearUsuario(req.body);
      res.json(usuario);
    } catch (e) {
      res.json({ error: 'Error al crear el usuario' });
    }
  }

  static async obtenerUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.obtenerUsuarios();
      res.json(usuarios);
    } catch (e) {
      res.json({ error: 'Error al obtener los usuarios' });
    }
  }

  static async actualizarUsuario(req, res) {
    try {
      const usuario = await UsuarioService.actualizarUsuario(req.params.id,req.body);
      if (usuario) {
        res.json(usuario);
      } 
      else {
        res.json({ error: 'Usuario no encontrado' });
      }

    } catch (e) {
      res.json({ e: 'Error al actualizar el usuario' });
    }
  }

  static async eliminarUsuario(req, res) {
    try {
      const eliminado = await UsuarioService.eliminarUsuario( req.params);
      if (eliminado) {
        res.json({ menssaje: 'Usuario eliminado' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (e) {
      res.json({ e: 'Error al eliminar el usuario' });
    }
  }

   

}

module.exports = UsuarioController;
