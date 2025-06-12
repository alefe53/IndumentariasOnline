import { sequelize } from "../../databases/sequelize.mysql.cnx.js";
import { DataTypes } from "sequelize";

const Pedido = sequelize.define(
  "Pedido",
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pendiente",
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "pedidos",
    timestamps: false,
  }
);

export default Pedido;
