import { IDetalleImpuestos } from "../../../interfaces/impuestos.interface";
import detallesImpuesto from "../../../models/Facturacion/impuestos/detalleImpuestos";

export default class DetalleImpuestoService {
  async addDetalleImpuesto(body: Array<IDetalleImpuestos>) {
    try {
 
     // cada detalle factura debe estar presente en su detalle imp


      const detalleImpuesto = await detallesImpuesto.bulkCreate(body);
      return detalleImpuesto;
    } catch (error) {
      return error;
    }
  }
}
