import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import tiposItem from "../../Inventario/tipoItem.model";

const tipoVenta = conexion.define(
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
//tipoVentas.sync({force:true})
tiposItem.hasMany(tipoVenta,{foreignKey:"tipoItemId"});
tipoVenta.belongsTo(tiposItem);

export default tipoVenta;
