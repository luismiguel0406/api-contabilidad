"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moneda = exports.TiposClientes = exports.TiposContactos = exports.TiposProveedores = void 0;
const tipoCliente_model_1 = __importDefault(require("../../models/Clientes/tipoCliente.model"));
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
const moneda_model_1 = __importDefault(require("../../models/Facturacion/moneda.model"));
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
class TiposClientes {
    constructor() {
        this.tipoClientesArray = [
            {
                descripcion: "FORMAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "INFORMAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoClientes() {
        try {
            tipoCliente_model_1.default.afterSync("createTipoClientes", () => {
                tipoCliente_model_1.default.bulkCreate(this.tipoClientesArray);
            });
        }
        catch (error) {
            console.error(error, "Error insertando tipo Clientes");
        }
    }
}
exports.TiposClientes = TiposClientes;
class Moneda {
    constructor() {
        this.monedaArray = [
            {
                descripcion: "PESOS",
                simbolo: "RD$",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "DOLAR",
                simbolo: "US$",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarMonedas() {
        try {
            moneda_model_1.default.afterSync("createMonedas", () => {
                moneda_model_1.default.bulkCreate(this.monedaArray);
            });
        }
        catch (error) {
            console.error(error, "Error insertando Monedas");
        }
    }
}
exports.Moneda = Moneda;
//# sourceMappingURL=Querys.js.map