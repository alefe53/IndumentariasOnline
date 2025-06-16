// src/models/mysql/associations.js
import Usuario from "./Usuario.js";
import Carrito from "./Carrito.js";
import Pedido from "./Pedido.js";
import DetallePedido from "./DetallePedido.js";
import Producto from "./Producto.js";
import CarritoProducto from "./CarritoProducto.js";

// Relaciones
Usuario.hasMany(Carrito, { foreignKey: "id_usuario" });
Carrito.belongsTo(Usuario, { foreignKey: "id_usuario" });

Usuario.hasMany(Pedido, { foreignKey: "id_usuario" });
Pedido.belongsTo(Usuario, { foreignKey: "id_usuario" });

Pedido.hasMany(DetallePedido, { foreignKey: "id_pedido" });
DetallePedido.belongsTo(Pedido, { foreignKey: "id_pedido" });

Producto.hasMany(DetallePedido, { foreignKey: "id_producto" });
DetallePedido.belongsTo(Producto, { foreignKey: "id_producto" });

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

export { Usuario, Carrito, Pedido, DetallePedido, Producto, CarritoProducto };
