import { DataTypes } from "sequelize";
import empresas from "../../models/Empresa/empresa.model";
import conexion from "../../Database/connectionDB";

const asientosContables = conexion.define(
  "asientoContable",
  {
    createAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    noEntrada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalDebito: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalCredito: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
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
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "ASIENTOS" }
);

empresas.hasMany(asientosContables, { foreignKey: "empresaId" });
asientosContables.belongsTo(empresas);

export default asientosContables;
