import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import Usuario from "../models/mysql/Usuario.js";
import Carrito from "../models/mysql/Carrito.js";
import Pedido from "../models/mysql/Pedido.js";
import DetallePedido from "../models/mysql/DetallePedido.js";
import Producto from "../models/mysql/Producto.js";
import CarritoProducto from "../models/mysql/CarritoProducto.js";

export const sequelize = new Sequelize(
  config.MYSQL_DATABASE,
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  { host: "127.0.0.1", dialect: "mysql" }
);

// Relaciones
// Un Usuario tiene muchos Carritos
Usuario.hasMany(Carrito, { foreignKey: "id_usuario" });
Carrito.belongsTo(Usuario, { foreignKey: "id_usuario" });

// Un Usuario tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey: "id_usuario" });
Pedido.belongsTo(Usuario, { foreignKey: "id_usuario" });

// Un Pedido tiene muchos DetallePedido
Pedido.hasMany(DetallePedido, { foreignKey: "id_pedido" });
DetallePedido.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Un Producto tiene muchos DetallePedido
Producto.hasMany(DetallePedido, { foreignKey: "id_producto" });
DetallePedido.belongsTo(Producto, { foreignKey: "id_producto" });

// Un Carrito puede tener muchos Productos (relación muchos a muchos, tabla intermedia implementada aquí)
Carrito.belongsToMany(Producto, {
  through: CarritoProducto,
  foreignKey: "id_carrito",
  otherKey: "id_producto",
});
Producto.belongsToMany(Carrito, {
  through: CarritoProducto,
  foreignKey: "id_producto",
  otherKey: "id_carrito",
});
