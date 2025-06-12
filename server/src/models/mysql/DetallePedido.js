import { sequelize } from "../../databases/sequelize.mysql.cnx.js";
import { DataTypes } from "sequelize";

const DetallePedido = sequelize.define(
  "DetallePedido",
  {
    id_detalle_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_producto_snapshot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad_comprada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    talle_comprado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color_comprado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio_unitario_compra: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    subtotal_linea: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "detalles_pedido",
    timestamps: false,
  }
);

export default DetallePedido;
