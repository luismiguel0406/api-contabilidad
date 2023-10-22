import { DataTypes } from "sequelize";
import empresas from "../Empresa/empresa.model";
import conexion from "../../Database/connectionDB";
import transaccion from "../Transaccion/Transaccion.model";

const entradasContables = conexion.define(
  "entradaContable",
  {
    numero: {
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    transaccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "DIARIO" }
);

entradasContables.sync()

empresas.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresas);

transaccion.hasMany(entradasContables, {
  foreignKey: "transaccionId",
});
entradasContables.belongsTo(transaccion);

export default entradasContables;
