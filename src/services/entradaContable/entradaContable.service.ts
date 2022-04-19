import entradasContables from "../../models/EntradaContable/entradaContable.model";
import AccionesEntradaContableService from "../AccioneseEntradaContable/AccionesEntradaContable.service";
import { v4 as uuidv4 } from "uuid";
import {
  IEntradaContable,
  IEntradaContableDetalle,
} from "../../interfaces/entradaContable.interface";
import TransaccionesComercialesService from "../transaccionesComerciales/transaccionesComerciales.service";


export default class EntradaContableService {
  private _transaccionId:any;
  private _payload;

  constructor(payload: string) {
    this._payload = payload
    this.getTransacionInit();
  }

  async getTransacionInit() {
    const transaccionComercial_service = new TransaccionesComercialesService();
    const transaccionId:any = await transaccionComercial_service.getTransaccionesComerciales(
      this._payload
    );
    this._transaccionId = transaccionId.id
    return
  }
  /* ****************************************** */

  async facturaPorPagar(data: any) {
    const transaccionId:any = this._transaccionId
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

    let entradaContableHeader: IEntradaContable = {
      noEntrada: uuidv4(),
      totalDebito: total,
      totalCredito: total,
      comentario,
      estado: true,
      createdAt,
      updatedAt: null,
      usuario,
      terminal,
      empresaId,
      transaccionComercialId: transaccionId, // Transaccion comercial  ejemplo: factura, pago , etc
      transaccionId: id, // Id de la accion realzada
      detalle: detalleFacturaPorPagar,
    };

    return entradaContableHeader;
  }

  /* *********************************************** */
  async generarDetalle(detalle: any) {
    const accionEntrada_service = new AccionesEntradaContableService();
    const transaccionId:any = this._transaccionId
    const accionesContables = <Array<any>>(
      await accionEntrada_service.getAccionEntrada(transaccionId)
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
}
