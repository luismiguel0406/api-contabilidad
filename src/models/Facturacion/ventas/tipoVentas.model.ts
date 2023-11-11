import { DataTypes } from "sequelize";
import conexion from "../../../database";
import tiposItem from "../../Inventario/tipoItem.model";

const tiposVenta = conexion.define(
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

tiposItem.hasMany(tiposVenta, { foreignKey: "tipoItemId" });
tiposVenta.belongsTo(tiposItem);

export default tiposVenta;
