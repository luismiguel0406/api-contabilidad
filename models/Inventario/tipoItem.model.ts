import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import item from "./Item.model";

const tiposItem = conexion.define(
  "tiposItem",
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


tiposItem.hasMany(item,{foreignKey:"tiposItemId"});
item.belongsTo(tiposItem);

export default tiposItem;