"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposContactos = exports.TiposProveedores = void 0;
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
const tipoProveedores_model_1 = __importDefault(require("../../models/Proveedores/tipoProveedores.model"));
class TiposProveedores {
    // AGREGO TIPO AL INICIO DEL PROGRAMA //
    constructor() {
        this.tipoProveedoresArray = [
            {
                tipoProveedor: "LOCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoProveedor: "EXTRANJERO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoProveedor: "INFORMAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTiposProveedores() {
        tipoProveedores_model_1.default.afterSync("CreaTiposProveedores", () => {
            try {
                tipoProveedores_model_1.default.bulkCreate(this.tipoProveedoresArray);
            }
            catch (error) {
                console.error(error, "Error insertando tipos proveedores");
            }
        });
    }
}
exports.TiposProveedores = TiposProveedores;
class TiposContactos {
    constructor() {
        this.tipoContactosArray = [
            {
                tipoContacto: "CLIENTE",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoContacto: "PROVEEDOR",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipoContacto: "PERSONAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoContactos() {
        tipoContactos_model_1.default.afterSync("createTipoContactos", () => {
            try {
                tipoContactos_model_1.default.bulkCreate(this.tipoContactosArray);
            }
            catch (error) {
                console.error(error, "Error insertando tipos contactos");
            }
        });
    }
}
exports.TiposContactos = TiposContactos;
//# sourceMappingURL=Querys.js.map