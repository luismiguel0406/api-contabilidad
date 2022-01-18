import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import tiposItem from "../../Inventario/tipoItem.model";

const tipoVentas = conexion.define(
  "tipoVenta",
  {
    descripcion: {
      type: DataTypes.STRING,
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
      allowNull: false,
    },
    tipoItemId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "FACTURACION" }
);

//--- ASOCIACIONES---// 

tiposItem.hasMany(tipoVentas,{foreignKey:"tipoItemId"});
tipoVentas.belongsTo(tiposItem);

export default tipoVentas;
