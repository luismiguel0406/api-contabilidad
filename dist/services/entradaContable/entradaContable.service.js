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
const entradaContable_model_1 = __importDefault(require("../../models/EntradaContable/entradaContable.model"));
const transaccion_service_1 = __importDefault(require("../transaccion/transaccion.service"));
const accionEntradaContable_model_1 = __importDefault(require("../../models/AccionEntradaContable/accionEntradaContable.model"));
const os_1 = __importDefault(require("os"));
class EntradaContableService {
    constructor() {
        this._transComercialId = 0;
        // async getTransaccionInit(payload: string) {
        //   const transaccion_service = new TransaccionService();
        //   const transaccion :any = await transaccion_service.getTransaccion(payload);
        //   return transaccion.id;
        // }
        // //Generar detalle entrada contable //
        // async generarDetalle(detalle: any) {
        //   const accionEntrada_service = new AccionesEntradaContableService();
        //   const accionesContables = <Array<any>>(
        //     await accionEntrada_service.getAccionEntrada(this._transComercialId)
        //   );
        //   let entradaContableDetalle: any = [];
        //   for await (let d of detalle) {
        //     let accionContableFiltered = accionesContables.filter(
        //       (a: any) => a.tipoCuentaId == d.tipoCuentaId
        //     );
        //     switch (accionContableFiltered[0]?.accion) {
        //       case "CREDITO":
        //         entradaContableDetalle.push({
        //           credito: d.valor,
        //           debito: 0,
        //           descripcionCuenta: d.descripcionCuenta,
        //           cuenta: d.cuenta,
        //         });
        //         break;
        //       case "DEBITO":
        //         entradaContableDetalle.push({
        //           credito: 0,
        //           debito: d.valor,
        //           descripcionCuenta: d.descripcionCuenta,
        //           cuenta: d.cuenta,
        //         });
        //         break;
        //       default:
        //         break;
        //     }
        //   }
        //   return entradaContableDetalle;
        // }
        // // Agregar Entrada Contrable
        // async addEntradaContable(entrada: IEntradaContable) {
        //   return await entradasContables.create(entrada);
        // }
        // // Entrada facturas por pagar
        // async facturaPorPagar(data: any) {
        //   let payload = "REGISTRO_FACTURAS_POR_PAGAR";
        //   const {
        //     total,
        //     comentario,
        //     empresaId,
        //     createdAt,
        //     usuario,
        //     terminal,
        //     id,
        //     detalleFacturaPorPagar,
        //   } = data;
        //   //construyo detalle de la entrada
        //   const detalleEntradaContable: Array<IEntradaContableDetalle> =
        //     await this.generarDetalle(detalleFacturaPorPagar);
        //   this._transComercialId = await this.getTransaccionInit(payload);
        //   let entradaContable: IEntradaContable = {
        //     noEntrada: Math.random(), // cambiar
        //     totalDebito: total,
        //     totalCredito: total,
        //     comentario,
        //     estado: true,
        //     createdAt,
        //     updatedAt: null,
        //     usuario,
        //     terminal,
        //     empresaId,
        //     transaccionComercialId: this._transComercialId, // Transaccion comercial  ejemplo: factura, pago , etc
        //     documentoId: id, // Id de la accion realizada // ver aqui arreglar nombres y demas
        //     detalle: detalleEntradaContable,
        //   };
        //   return entradaContable;
        // }
        this._transaccionId = 0;
    }
    // 1- Otengo id de la transaccion en curso
    getTransaccionInit(payload, facturaPorPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaccion_service = new transaccion_service_1.default();
            const transaccion = yield transaccion_service.getTransaccion(payload);
            this._transaccionId = transaccion.id;
            // 2- Busco las acciones que se haran relativa a esta transaccion
            const accionContable = yield accionEntradaContable_model_1.default.findAll({
                attributes: ["transaccionId", "tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
                where: { id: this._transaccionId, estado: "1" }
            });
            // 3- Llenar la cabecera de la entrada contable, segun los datos que ingresan
            const dataEntrada = {
                numero: 100,
                totalDebito: 1,
                totalCredito: 1,
                comentario: '',
                estado: true,
                createdAt: new Date(),
                transaccionId: this._transaccionId,
                documentoId: facturaPorPagar.id,
                empresaId: 1,
                usuario: os_1.default.userInfo().username,
                terminal: os_1.default.hostname(),
                detalle: { test: "valor 1", test2: "valor 2" }
            };
            const entradaContable = yield entradaContable_model_1.default.create(dataEntrada);
            return entradaContable;
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map