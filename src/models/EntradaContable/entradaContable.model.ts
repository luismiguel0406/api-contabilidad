import { DataTypes } from "sequelize";
import empresas from "../Empresa/empresa.model";
import conexion from "../../Database/connectionDB";
import transaccion from "../Transaccion/Transaccion.model";

const entradasContables = conexion.define(
  "entradaContable",
  {
    createdAt: {
      type: DataTypes.DATE,
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
    transaccionComercialId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  { schema: "DIARIO" }
);

//entradasContables.sync({force:true})

empresas.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresas);

transaccion.hasMany(entradasContables, {
  foreignKey: "transaccionComercialId",
});
entradasContables.belongsTo(transaccion);

export default entradasContables;
