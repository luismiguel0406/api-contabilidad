"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoEfecto = exports.TipoMovimiento = exports.CuentasContables = exports.TransaccionesComerciales = exports.TipoCuentasContables = exports.TipoFacturasPorPagar = exports.Tipogasto = exports.Perfiles = exports.MediosDePago = exports.Impuestos = exports.TipoVenta = exports.TiposItem = exports.TiposComprobantes = exports.GrupoCuentasContables = exports.Moneda = exports.TiposClientes = exports.TiposContactos = exports.TiposProveedores = exports.Empresa = void 0;
const tipoCliente_model_1 = __importDefault(require("../../models/Clientes/tipoCliente.model"));
const tipoContactos_model_1 = __importDefault(require("../../models/Contacto/tipoContactos.model"));
const grupoCuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/grupoCuentasContables.model"));
const tipoComprobante_model_1 = __importDefault(require("../../models/Facturacion/comprobantes/tipoComprobante.model"));
const moneda_model_1 = __importDefault(require("../../models/Facturacion/moneda/moneda.model"));
const tipoItem_model_1 = __importDefault(require("../../models/Inventario/tipoItem.model"));
const tipoProveedores_model_1 = __importDefault(require("../../models/Proveedores/tipoProveedores.model"));
const tipoVentas_model_1 = __importDefault(require("../../models/Facturacion/ventas/tipoVentas.model"));
const impuestos_model_1 = __importDefault(require("../../models/Facturacion/impuestos/impuestos.model"));
const medioDePago_model_1 = __importDefault(require("../../models/Facturacion/medioDePago/medioDePago.model"));
const perfil_model_1 = __importDefault(require("../../models/Perfiles/perfil.model"));
const gastos_model_1 = __importDefault(require("../../models/Facturacion/Facturas por pagar/Gastos/gastos.model"));
const tiposFacturasPorPagar_model_1 = __importDefault(require("../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model"));
const tipoCuentaContable_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoCuentaContable.model"));
const TransaccionesComerciales_model_1 = __importDefault(require("../../models/TransaccionesComerciales/TransaccionesComerciales.model"));
const empresa_model_1 = __importDefault(require("../../models/Empresa/empresa.model"));
const cuentasContables_model_1 = __importDefault(require("../../models/Cuentas Contables/cuentasContables.model"));
const tipoMovimiento_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoMovimiento.model"));
const tipoEfecto_model_1 = __importDefault(require("../../models/Cuentas Contables/tipoEfecto.model"));
class Empresa {
    constructor() {
        this._empresa = {
            nombre: "FRUTAS y POSTRES S.A.",
            alias: "FSA",
            rnc: "1-547896-89",
            sucursalId: 1,
            estado: true,
            planId: 1,
            createdAt: new Date(),
            updatedAt: null,
            direccion: "CALLE LAS HOJAS EDIFICIO ALMENDRA #4/ SANTO DOMINGO ESTE",
            telefono: "809-123-4567",
            correo: "HOJAS@GMAIL.COM",
            usuario: "SA",
            terminal: "SA",
        };
    }
    CrearEmpresa() {
        try {
            empresa_model_1.default.afterSync("createEmpresa", () => __awaiter(this, void 0, void 0, function* () {
                yield empresa_model_1.default.create(this._empresa);
            }));
        }
        catch (error) {
            console.error(`Error al crear empresa, ${error}`);
        }
    }
}
exports.Empresa = Empresa;
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
        tipoProveedores_model_1.default.afterSync("CreaTiposProveedores", () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield tipoProveedores_model_1.default.bulkCreate(this.tipoProveedoresArray);
            }
            catch (error) {
                console.error(`Error insertando tipos proveedores, ${error}`);
            }
        }));
    }
}
exports.TiposProveedores = TiposProveedores;
class TiposContactos {
    constructor() {
        this.tipoContactosArray = [
            {
                descripcion: "CLIENTE",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "PROVEEDOR",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "PERSONAL",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "OTROS",
                createdAt: new Date(),
                updatedAt: null,
                estado: true,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoContactos() {
        tipoContactos_model_1.default.afterSync("createTipoContactos", () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield tipoContactos_model_1.default.bulkCreate(this.tipoContactosArray);
            }
            catch (error) {
                console.error(`Error insertando tipos contactos, ${error}`);
            }
        }));
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
            tipoCliente_model_1.default.afterSync("createTipoClientes", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoCliente_model_1.default.bulkCreate(this.tipoClientesArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando tipo Clientes, ${error}`);
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
            moneda_model_1.default.afterSync("createMonedas", () => __awaiter(this, void 0, void 0, function* () {
                yield moneda_model_1.default.bulkCreate(this.monedaArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando Monedas, ${error}`);
        }
    }
}
exports.Moneda = Moneda;
class GrupoCuentasContables {
    constructor() {
        this.grupoCuentaContableArray = [
            {
                cuenta: "10",
                descripcion: "ACTIVOS CORRIENTES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "11",
                descripcion: "CUENTAS POR COBRAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "12",
                descripcion: "INVERSIONES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "13",
                descripcion: "ACTIVOS FIJOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "14",
                descripcion: "ACTIVOS DIFERIDOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "15",
                descripcion: "OTROS ACTIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                monedaId: 1,
            },
            {
                cuenta: "20",
                descripcion: "PASIVOS CORRIENTES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "200",
                descripcion: "SOBREGIRO BANCARIO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "201",
                descripcion: "CUENTAS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "202",
                descripcion: "PRESTAMOS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "203",
                descripcion: "IMPUESTOS SOBRE LA RENTA POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "204",
                descripcion: "DIVIDENDOS DECLARADOS POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "205",
                descripcion: "RETENCIONES Y ACUMULACIONES POR PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                monedaId: 1,
            },
            {
                cuenta: "60",
                descripcion: "GASTOS GENERALES Y ADMINISTRATIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 6,
                monedaId: 1,
            },
            {
                cuenta: "61",
                descripcion: "MANTENIMIENTOS MOBILIARIOS Y EQUIPO DE OFICINA",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 6,
                monedaId: 1,
            },
            {
                cuenta: "62",
                descripcion: "GASTOS FINANCIAMIENTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 6,
                monedaId: 1,
            },
        ];
    }
    InsertarGruposCuentasContable() {
        try {
            grupoCuentasContables_model_1.default.afterSync("createGrupoCuentasContables", () => __awaiter(this, void 0, void 0, function* () {
                yield grupoCuentasContables_model_1.default.bulkCreate(this.grupoCuentaContableArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando grupos Cuentas Contables, ${error}`);
        }
    }
}
exports.GrupoCuentasContables = GrupoCuentasContables;
class TiposComprobantes {
    constructor() {
        this.tipoComprobantesArray = [
            {
                tipo: "B01",
                descripcion: "FISCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B02",
                descripcion: "CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B04",
                descripcion: "NOTAS DE CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B11",
                descripcion: "COMPRAS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B12",
                descripcion: "REGISTRO UNICO DE INGRESOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B13",
                descripcion: "GASTOS MENORES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B14",
                descripcion: "REGIMEN ESPECIAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B15",
                descripcion: "GUBERNAMENTAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B16",
                descripcion: "EXPORTACIONES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "B17",
                descripcion: "PAGOS AL EXTERIOR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                tipo: "E-CF",
                descripcion: "ELECTRONICO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarComprobantes() {
        try {
            tipoComprobante_model_1.default.afterSync("createComprobantes", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoComprobante_model_1.default.bulkCreate(this.tipoComprobantesArray);
            }));
        }
        catch (error) {
            console.error(error, `Error insertando comprobantes, ${error}`);
        }
    }
}
exports.TiposComprobantes = TiposComprobantes;
class TiposItem {
    constructor() {
        this.tipoItemArray = [
            {
                descripcion: "BIENES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "SERVICIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoItem() {
        try {
            tipoItem_model_1.default.afterSync("createTipoItem", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoItem_model_1.default.bulkCreate(this.tipoItemArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando Tipos item, ${error}`);
        }
    }
}
exports.TiposItem = TiposItem;
class TipoVenta {
    constructor() {
        this.tipoVentaArray = [
            {
                descripcion: "VENTAS DE BIENES CON VALOR FISCAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 1,
            },
            {
                descripcion: "VENTAS DE BIENES DE CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 1,
            },
            {
                descripcion: "VENTAS SERVICIOS COMPROBANTE",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS SERVICIO CONSUMO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS AL ESTADO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS DE REGIMENES ESPECIALES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
            {
                descripcion: "VENTAS AL EXTERIOR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoItemId: 2,
            },
        ];
    }
    InsertarTipoVentas() {
        try {
            tipoVentas_model_1.default.afterSync("createTipoVenta", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoVentas_model_1.default.bulkCreate(this.tipoVentaArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando Tipos venta, ${error}`);
        }
    }
}
exports.TipoVenta = TipoVenta;
class Impuestos {
    constructor() {
        this.impuestoArray = [
            {
                nombre: "ITBIS FACTURADO",
                alias: "ITBIS",
                porcentaje: 0.18,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "IMPUESTO SELECTIVO AL CONSUMO",
                alias: "ISC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS RETENIDO",
                alias: "ITB RET",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS SUJETO A PROPORCIONALIDAD",
                alias: "ISP",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS LLEVADO AL COSTO",
                alias: "ILC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS POR ADELANTAR",
                alias: "ITBPA",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "ITBIS COMPRAS",
                alias: "ITBC",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "IMPUESTOS SOBRE LA RENTA",
                alias: "ISR",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "PROPINA LEGAL",
                alias: "PL",
                porcentaje: 0.1,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "OTROS/TASA",
                alias: "OT",
                porcentaje: 0,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                nombre: "CDT",
                alias: "CDT",
                porcentaje: 0.02,
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarImpuestos() {
        try {
            impuestos_model_1.default.afterSync("createImpuestos", () => __awaiter(this, void 0, void 0, function* () {
                yield impuestos_model_1.default.bulkCreate(this.impuestoArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando impuestos, ${error}`);
        }
    }
}
exports.Impuestos = Impuestos;
class MediosDePago {
    constructor() {
        this.medioDePagoArray = [
            {
                descripcion: "EFECTIVO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "TARJETA",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarMediosDePago() {
        try {
            medioDePago_model_1.default.afterSync("createMediosDePago", () => __awaiter(this, void 0, void 0, function* () {
                yield medioDePago_model_1.default.bulkCreate(this.medioDePagoArray);
            }));
        }
        catch (error) {
            console.error(`Error insertando medios de pago, ${error}`);
        }
    }
}
exports.MediosDePago = MediosDePago;
class Perfiles {
    constructor() {
        this.PerfilesArray = [
            {
                descripcion: "ADMINISTRADOR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "AUXILIAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
        ];
    }
    InsertarPerfiles() {
        try {
            perfil_model_1.default.afterSync("createPerfil", () => __awaiter(this, void 0, void 0, function* () {
                perfil_model_1.default.bulkCreate(this.PerfilesArray);
            }));
        }
        catch (error) {
            console.error(`Error al insertar los perfiles, ${error}`);
        }
    }
}
exports.Perfiles = Perfiles;
class Tipogasto {
    constructor() {
        this.tipoGastoArray = [
            {
                descripcion: "00-NO ESPECIFICADO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "01-GASTOS DE PERSONAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "02-GASTOS POR TRABAJOS, SUMINISTROS Y SERVICIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "03-ARRENDAMIENTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "04-GASTOS DE ACTIVOS FIJOS'",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "05-GASTOS DE REPRESENTACIÓN",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "06-OTRAS DEDUCCIONES ADMITIDAS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "07-GASTOS FINANCIEROS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "08-GASTOS EXTRAORDINARIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "09-COMPRAS Y GASTOS QUE FORMAN PARTE DEL COSTO DE VENTA",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "10-ADQUISICIONES DE ACTIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "11-GASTOS DE SEGUROS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoGasto() {
        try {
            gastos_model_1.default.afterSync("createTipoGastos", () => __awaiter(this, void 0, void 0, function* () {
                gastos_model_1.default.bulkCreate(this.tipoGastoArray);
            }));
        }
        catch (error) {
            console.error(`Error al insertar tipos de gastos, ${error}`);
        }
    }
}
exports.Tipogasto = Tipogasto;
class TipoFacturasPorPagar {
    constructor() {
        this.tipoFacturasPorPagarArray = [
            {
                descripcion: "GASTO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "NOTA DE CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoFactura() {
        try {
            tiposFacturasPorPagar_model_1.default.afterSync("createTipoFacturas", () => __awaiter(this, void 0, void 0, function* () {
                yield tiposFacturasPorPagar_model_1.default.bulkCreate(this.tipoFacturasPorPagarArray);
            }));
        }
        catch (error) {
            console.error(`Error al insertar tipo de facturas, ${error}`);
        }
    }
}
exports.TipoFacturasPorPagar = TipoFacturasPorPagar;
class TipoCuentasContables {
    constructor() {
        this.tipoCuentaContableArray = [
            {
                descripcion: "ACTIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "PASIVOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "CAPITAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "INGRESOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "COSTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "GASTOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
            {
                descripcion: "RESUMENES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
            },
        ];
    }
    InsertarTipoCuentasContables() {
        try {
            tipoCuentaContable_model_1.default.afterSync("createTiposCuenta", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoCuentaContable_model_1.default.bulkCreate(this.tipoCuentaContableArray);
            }));
        }
        catch (error) {
            console.error(`Error al insertar tipo cuenta contable, ${error}`);
        }
    }
}
exports.TipoCuentasContables = TipoCuentasContables;
class TransaccionesComerciales {
    constructor() {
        this._transaccionesArray = [
            {
                descripcion: "Apertura de capital",
                payload: "APERTURA_CAPITAL",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Registro de facturas por pagar tipo gasto",
                payload: "REGISTRO_FACTURAS_POR_PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Aplicacion de credito ",
                payload: "APLICACION_CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Aplicacion de pago a factura por pagar",
                payload: "PAGO_FACTURA_POR_PAGAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Ventas al contado",
                payload: "VENTA_CONTADO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Ventas a credito",
                payload: "VENTA_CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "Gastos varios",
                payload: "GASTOS_VARIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTransaccionesComerciales() {
        try {
            TransaccionesComerciales_model_1.default.afterSync("createTransacciones", () => __awaiter(this, void 0, void 0, function* () {
                yield TransaccionesComerciales_model_1.default.bulkCreate(this._transaccionesArray);
            }));
        }
        catch (error) {
            return console.error(`Error al insertar transacciones, ${error}`);
        }
    }
}
exports.TransaccionesComerciales = TransaccionesComerciales;
class CuentasContables {
    constructor() {
        this._cuenntaArray = [
            {
                noCuenta: "1010001",
                descripcion: "BANCO POPULAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 1,
                grupoCuentasContableId: 1,
                monedaId: 1,
                empresaId: 1,
            },
            {
                noCuenta: "2010001",
                descripcion: "PROVEEDORES",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 2,
                grupoCuentasContableId: 9,
                monedaId: 1,
                empresaId: 1,
            },
            {
                noCuenta: "6010001",
                descripcion: "GASTOS VARIOS",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
                tipoCuentaContableId: 6,
                grupoCuentasContableId: 14,
                monedaId: 1,
                empresaId: 1,
            },
        ];
    }
    InsertarCuentas() {
        try {
            cuentasContables_model_1.default.afterSync("createCuentasContables", () => __awaiter(this, void 0, void 0, function* () {
                yield cuentasContables_model_1.default.bulkCreate(this._cuenntaArray);
            }));
        }
        catch (error) {
            return console.error(`Error al insertar cuentas contables, ${error}`);
        }
    }
}
exports.CuentasContables = CuentasContables;
class TipoMovimiento {
    constructor() {
        this._movimientos = [
            {
                descripcion: "CREDITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "DEBITO",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    InsertarTipoMovimiento() {
        try {
            tipoMovimiento_model_1.default.afterSync("Insertar movimientos", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoMovimiento_model_1.default.bulkCreate(this._movimientos);
            }));
        }
        catch (error) {
            return console.error(`Error al insertar tipo de movimientos ${error}`);
        }
    }
}
exports.TipoMovimiento = TipoMovimiento;
class TipoEfecto {
    constructor() {
        this._efectos = [
            {
                descripcion: "AUMENTAR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
            {
                descripcion: "DISMINUIR",
                estado: true,
                createdAt: new Date(),
                updatedAt: null,
                usuario: "SA",
                terminal: "SA",
            },
        ];
    }
    insertarTipoEfecto() {
        try {
            tipoEfecto_model_1.default.afterSync("insertar efectos", () => __awaiter(this, void 0, void 0, function* () {
                yield tipoEfecto_model_1.default.bulkCreate(this._efectos);
            }));
        }
        catch (error) {
            return console.error(`Error al insertar tipo de efectos ${error}`);
        }
    }
}
exports.TipoEfecto = TipoEfecto;
//# sourceMappingURL=Querys.js.map