import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tipoVentas from "../Facturacion/ventas/tipoVentas.model";
import item from "./Item.model";

const tiposItem = conexion.define(
  "tipoItem",
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
    },
  },
  { schema: "INVENTARIO" }
);


tiposItem.hasMany(item,{foreignKey:"tipoItemId"});
item.belongsTo(tiposItem);

tiposItem.hasMany(tipoVentas,{foreignKey:"tipoItemId"});
tipoVentas.belongsTo(tiposItem);

export default tiposItem;