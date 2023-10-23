import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import { ITransaccion } from "interfaces/transaccion.interface";

const transaccion =  conexion.define(
  "transaccion",
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
export default transaccion;
