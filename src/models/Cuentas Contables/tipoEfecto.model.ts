import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tipoEfecto = conexion.define("tipoEfecto", {
  descripcion: {
    type: DataTypes.STRING(15),
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  terminal: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{schema: "CUENTAS" });

export default tipoEfecto;