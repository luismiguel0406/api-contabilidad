import { IFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";
import facturas from "../../../models/Facturacion/facturas/factura.model";
import detallesImpuesto from "../../../models/Facturacion/impuestos/detalleImpuestos";

export default class FacturasService {
  async addFactura(body: IFactura) {
    try {
      const factura = await facturas.create(body);
      return factura;
    } catch (error) {
      return error;
    }
  }
  
  async getFacturas(id: any = null, empresaId:string) {
    const facturasResult =
      id === null
        ? await facturas.findAll({
            include: [
              {
                model: detallesFactura,
                required: true,
                include: [{ model: detallesImpuesto }],
              },
            ],
          })
        : await facturas.findOne({
            include: [
              {
                model: detallesFactura,
                required: true,
                include: [{ model: detallesImpuesto }],
              },
            ],
            where: { id, empresaId, estado: "1" },
          });

    return facturasResult;
  }

  async deleteFactura(id: string, empresaId:string) {
    await facturas.update({ estado: "0" }, { where: { id, empresaId } });
  }

  async updateFactura() {
    return "Las facturas no se actualizan";
  }
}
