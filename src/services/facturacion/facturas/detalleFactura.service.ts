import { IDetalleFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";

export default class DetalleFacturaService {
  async addDetalleFactura(body: Array<IDetalleFactura>, facturaId: string) {
    try {
      let detalleImpuesto = 	
        [
          {
            impuestoId: 1,
            valor: 60.8,            
          },
            {
            impuestoId: 1,
            valor: 45.8,
          },
        ]
      
      let detalleConvertido = JSON.stringify(detalleImpuesto)
      for (let detalle of body) {
        detalle.facturaId = facturaId;
        detalle.detalleImpuesto = detalleConvertido;
      }
      const detalleFactura: any = <any> await detallesFactura.bulkCreate(body);

      return detalleFactura;
      
    } catch (error) {
      return error;
    }
  }
}
