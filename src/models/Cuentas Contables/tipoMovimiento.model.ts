import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tipoMovimiento = conexion.define("tipoMovimiento", {
  descripcion: {
    type: DataTypes.STRING(10),
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
  },
},
{schema: "CUENTAS" });

tipoMovimiento.sync()
export default tipoMovimiento;
