import bcrypt from 'bcrypt';
import Usuario from '../models/usuario.sequelize.model.js';

const UsuarioRepository = {
  crearUsuario: async ({ nombre, apellido, mail, password, telefono, rol }) => {
    const passwordHasheada = await bcrypt.hash(password, 10);
    return await Usuario.create({
      nombre,
      apellido,
      mail,
      password: passwordHasheada,
      telefono,
      rol
    });
  },

  buscarPorEmail: async (mail) => {
    return await Usuario.findOne({ where: { mail } });
  },

  validarPassword: async (usuario, passwordPlano) => {
    return await bcrypt.compare(passwordPlano, usuario.password);
  }
};

module.exports = UsuarioRepository;
