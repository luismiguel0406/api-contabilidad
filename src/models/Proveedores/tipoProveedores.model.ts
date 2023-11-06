import { DataTypes, Model } from "sequelize";
import conexion from "../../Database";
import { TTipoGenerico } from "types";

const tipoProveedor = conexion.define<Model<TTipoGenerico>>(
  "tipoProveedor",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "PROVEEDORES" }
);

export default tipoProveedor;
