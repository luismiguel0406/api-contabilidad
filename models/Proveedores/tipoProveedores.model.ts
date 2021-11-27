import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import { tipoProveedores, tipoProveedores as tipoProveedoresArray } from "../../helpers/Querys Iniciales/Querys";
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


tipoProveedor.hasMany(Proveedores, { foreignKey: "tipoProveedorId"});
Proveedores.belongsTo(tipoProveedor);

// AGREGO TIPO AL INICIO DEL PROGRAMA //

tipoProveedor.afterSync("CreaTiposProveedores", () => {
  try {
     tipoProveedor.bulkCreate(tipoProveedoresArray)
     
  } catch (error) {
    console.error(error, "Error insertando tipos proveedores");
  }
});

export default tipoProveedor;
