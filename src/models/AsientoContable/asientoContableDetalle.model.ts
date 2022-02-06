import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import asientosContables from "./asientoContableHeader.model";

const asientosContablesDetalle = conexion.define(
  "asientoContableDetalle",
  {
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcionCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.STRING,
      defaultValue: "Asiento",
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
    asientoId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  },
  { schema: "ASIENTOS" }
);

asientosContables.hasMany(asientosContablesDetalle,{foreignKey:"asientoId"});
asientosContablesDetalle.belongsTo(asientosContables);

export default asientosContablesDetalle;
