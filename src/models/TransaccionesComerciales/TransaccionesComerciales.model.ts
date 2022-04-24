import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const transaccionesComerciales = conexion.define(
  "transaccionComercial",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payload: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "DIARIO" }
);


//transaccionesComerciales.sync({force:true})
export default transaccionesComerciales;
