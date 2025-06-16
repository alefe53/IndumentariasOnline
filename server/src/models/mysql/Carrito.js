import { sequelize } from "../../database/sequelize.mysql.cnx.js";
import { DataTypes } from "sequelize";

// Define el modelo Carrito usando Sequelize
const Carrito = sequelize.define(
  "Carrito",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "carritos",
    timestamps: false,
  }
);

export default Carrito;
