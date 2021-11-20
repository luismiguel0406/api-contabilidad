import { date } from "joi";
import { DataTypes } from "sequelize";
import { now } from "sequelize/types/lib/utils";
import conexion from "../../Database/connectionDB";
import { tipoProveedores } from "../../helpers/Querys Iniciales/Querys";
import Proveedores from "./Proveedores.model";

const tipoProveedor = conexion.define(
  "tipoProveedor",
  {
    tipoProveedor: {
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

tipoProveedor.sync({force:true});

tipoProveedor.hasMany(Proveedores, {
  foreignKey: "tipoProveedorId",
});
Proveedores.belongsTo(tipoProveedor);

tipoProveedor.afterSync("CreaTiposProveedores", () => {
  try {
    tipoProveedores.forEach((tipo) => {
      tipoProveedor.create(tipo);
    });
  } catch (error) {
    console.error(error, "Error insertando tipos proveedores");
  }
});

export default tipoProveedor;
