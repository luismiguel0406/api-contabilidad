import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import entradasContables from "./entradaContable.model";

const entradaContablesDetalle = conexion.define(
  "entradaContableDetalle",
  {
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcionCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    debito: {
      type: DataTypes.FLOAT,
    },
    credito: {
      type: DataTypes.FLOAT,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    entradaId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  },
  { schema: "DIARIO" }
);

entradasContables.hasMany(entradaContablesDetalle,{foreignKey:"entradaId"});
entradaContablesDetalle.belongsTo(entradasContables);

export default entradaContablesDetalle;
