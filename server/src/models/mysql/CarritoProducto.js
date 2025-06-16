import { sequelize } from "../../database/sequelize.mysql.cnx.js";
import { DataTypes } from "sequelize";

const CarritoProducto = sequelize.define(
  "CarritoProducto",
  {
    id_carrito_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "carritos_productos",
    timestamps: false,
  }
);

export default CarritoProducto;
