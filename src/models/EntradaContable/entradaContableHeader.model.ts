import { DataTypes } from "sequelize";
import empresas from "../Empresa/empresa.model";
import conexion from "../../Database/connectionDB";

const entradasContables = conexion.define(
  "entradaContable",
  {
    createAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    noEntrada: {
      type: DataTypes.INTEGER,
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
    comentario: {
      type: DataTypes.STRING,
      defaultValue: "ASIENTO CONTABLE",
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

empresas.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresas);

export default entradasContables;
