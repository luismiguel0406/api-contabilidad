import { IDetalleFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";

export default class DetalleFacturaService {
  async addDetalleFactura(body: IDetalleFactura) {
    try {
      const detalleFactura = await detallesFactura.create(body);
      return detalleFactura;
    } catch (error) {
      return error;
    }
  }
}
