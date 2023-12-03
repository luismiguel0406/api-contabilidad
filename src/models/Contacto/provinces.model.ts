import { Model, DataTypes } from "sequelize";
import conexion from "../../database";
import { TProvince } from "types";

const provinces = conexion.define<Model<TProvince>>(
  "province",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    identifier: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { schema: "CONTACTOS", updatedAt: false }
);

export default provinces;
