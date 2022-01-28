import { isSchema } from "joi";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tiposCuentaContable = conexion.define("tipoCuentaContable", {
  descripcion: {
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
  
},{schema:"CUENTAS"});


export default tiposCuentaContable;

