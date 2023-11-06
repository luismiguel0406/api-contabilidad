import { DataTypes, Model } from "sequelize";
import empresas from "../Empresa/empresa.model";
import conexion from "../../Database";
import transaccion from "../Transaccion/Transaccion.model";
import { TEntradaContable } from "types";

const entradasContables = conexion.define<Model<TEntradaContable>>(
  "entradaContable",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    debito: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    credito: {
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
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    referenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaccionId: {
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

empresas.hasMany(entradasContables, { foreignKey: "empresaId" });
entradasContables.belongsTo(empresas);

transaccion.hasMany(entradasContables, {
  foreignKey: "transaccionId",
});
entradasContables.belongsTo(transaccion);

export default entradasContables;
