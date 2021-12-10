import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const item = conexion.define(
  "item",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precioCompra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    precioVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    margenGanancia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cantidadMinima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
    tipoItemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  { schema: "INVENTARIO" }
);

export default item;
