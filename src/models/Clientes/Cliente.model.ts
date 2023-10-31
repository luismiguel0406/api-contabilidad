import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import tipoCliente from "./tipoCliente.model";
import { TCliente } from "types";

const clientes = conexion.define<Model<TCliente>>(
  "clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    pagaItbis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "1",
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
    tipoContactoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoClienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CLIENTES" }
);

//--- ASOCIACIONES---//

tipoCliente.hasMany(clientes, { foreignKey: "tipoClienteId" });
clientes.belongsTo(tipoCliente);

export default clientes;
