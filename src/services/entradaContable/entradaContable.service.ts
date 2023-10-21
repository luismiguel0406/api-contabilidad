import entradasContables from "../../models/EntradaContable/entradaContable.model";
import AccionesEntradaContableService from "../AccioneseEntradaContable/AccionesEntradaContable.service";
import { v4 as uuidv4 } from "uuid";
import {
  IEntradaContable,
  IEntradaContableDetalle,
} from "../../interfaces/entradaContable.interface";
import TransaccionService from "../transaccion/transaccion.service";
export default class EntradaContableService {
  private _transComercialId: number = 0;

  async getTransaccionInit(payload: string) {
    const transaccion_service = new TransaccionService();

    const transaccion :any = await transaccion_service.getTransaccion(payload);
    return transaccion.id;
  }

  //Generar detalle entrada contable //
  async generarDetalle(detalle: any) {
    const accionEntrada_service = new AccionesEntradaContableService();
    const accionesContables = <Array<any>>(
      await accionEntrada_service.getAccionEntrada(this._transComercialId)
    );
    let entradaContableDetalle: any = [];
    for await (let d of detalle) {
      let accionContableFiltered = accionesContables.filter(
        (a: any) => a.tipoCuentaId == d.tipoCuentaId
      );

      switch (accionContableFiltered[0]?.accion) {
        case "CREDITO":
          entradaContableDetalle.push({
            credito: d.valor,
            debito: 0,
            descripcionCuenta: d.descripcionCuenta,
            cuenta: d.cuenta,
          });

          break;
        case "DEBITO":
          entradaContableDetalle.push({
            credito: 0,
            debito: d.valor,
            descripcionCuenta: d.descripcionCuenta,
            cuenta: d.cuenta,
          });

          break;
        default:
          break;
      }
    }
    return entradaContableDetalle;
  }
  // Agregar Entrada Contrable
  async addEntradaContable(entrada: IEntradaContable) {
    return await entradasContables.create(entrada);
  }

  // Entrada facturas por pagar
  async facturaPorPagar(data: any) {
    let payload = "REGISTRO_FACTURAS_POR_PAGAR";
    const {
      total,
      comentario,
      empresaId,
      createdAt,
      usuario,
      terminal,
      id,
      detalleFacturaPorPagar,
    } = data;

    //construyo detalle de la entrada
    const detalleEntradaContable: Array<IEntradaContableDetalle> =
      await this.generarDetalle(detalleFacturaPorPagar);
    this._transComercialId = await this.getTransaccionInit(payload);

    let entradaContable: IEntradaContable = {
      noEntrada: Math.random(), // cambiar
      totalDebito: total,
      totalCredito: total,
      comentario,
      estado: true,
      createdAt,
      updatedAt: null,
      usuario,
      terminal,
      empresaId,
      transaccionComercialId: this._transComercialId, // Transaccion comercial  ejemplo: factura, pago , etc
      documentoId: id, // Id de la accion realizada // ver aqui arreglar nombres y demas
      detalle: detalleEntradaContable,
    };

    return entradaContable;
  }
}
