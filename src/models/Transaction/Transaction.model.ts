import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTransaction } from "types";

const transaction = conexion.define<Model<TTransaction>>(
  "transaction",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payload: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
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
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "DIARIO" }
);

export default transaction;
