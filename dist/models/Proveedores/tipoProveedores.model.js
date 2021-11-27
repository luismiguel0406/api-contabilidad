"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../../Database/connectionDB"));
const Querys_1 = require("../../helpers/Querys Iniciales/Querys");
const Proveedores_model_1 = __importDefault(require("./Proveedores.model"));
const tipoProveedor = connectionDB_1.default.define("tipoProveedor", {
    tipoProveedor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    terminal: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { schema: "PROVEEDORES" });
tipoProveedor.hasMany(Proveedores_model_1.default, { foreignKey: "tipoProveedorId" });
Proveedores_model_1.default.belongsTo(tipoProveedor);
// AGREGO TIPO AL INICIO DEL PROGRAMA //
tipoProveedor.afterSync("CreaTiposProveedores", () => {
    try {
        tipoProveedor.bulkCreate(Querys_1.tipoProveedores);
    }
    catch (error) {
        console.error(error, "Error insertando tipos proveedores");
    }
});
exports.default = tipoProveedor;
//# sourceMappingURL=tipoProveedores.model.js.map