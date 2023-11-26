import { Model, DataTypes } from "sequelize";
import conexion from "../../database";
import { TTypeGeneric } from "types";

const typeContacts = conexion.define<Model<TTypeGeneric>>(
  "typeContact",
  {
    description: {
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
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "CONTACTOS" }
);

export default typeContacts;
