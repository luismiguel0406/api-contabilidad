import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const cuentaContable = conexion.define(
  "cuentasContable",
  {
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     cuentaPadreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monedaId: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.DATE
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING
    
    },
  },
  { schema: "CUENTAS" }
);

cuentaContable.hasMany(cuentaContable,{foreignKey:"cuentaPadreId"})
export default cuentaContable;
