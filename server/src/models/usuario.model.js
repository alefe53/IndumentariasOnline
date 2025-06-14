//src/models/usuario.model.js

// Usa import para mantener consistencia con los modelos Sequelize modernos
import Direccion from "./direccion.model.js";

class Usuario {
  constructor({
    id_usuario,
    nombre,
    apellido,
    mail,
    password,
    direccion_envio = {}, // Puede ser un objeto literal o una instancia de Direccion
    telefono = "",
    rol = "cliente",
    fecha_registro,
    ultima_conexion,
  }) {
    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.password = password;

    // Si direccion_envio es un objeto pero no una instancia de Direccion, se crea una nueva.
    // Si es undefined o null, se crea una Direccion vacía gracias al default en el constructor de Direccion.
    if (direccion_envio && !(direccion_envio instanceof Direccion)) {
      this.direccion_envio = new Direccion(direccion_envio);
    } else if (direccion_envio instanceof Direccion) {
      this.direccion_envio = direccion_envio;
    } else {
      this.direccion_envio = new Direccion();
    }

    this.telefono = telefono;
    this.rol = rol;
    this.fecha_registro = fecha_registro || new Date();
    this.ultima_conexion = ultima_conexion || new Date();
  }
}

export default Usuario;
