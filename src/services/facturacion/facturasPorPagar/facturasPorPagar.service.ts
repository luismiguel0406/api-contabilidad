import { IFacturasPorPagar } from "interfaces/facturasPorPagar.interface";
import detalleFacturasPorPagar from "models/Facturacion/Facturas por pagar/detalleFacturasPorPagar.model";
import facturasPorPagar from "models/Facturacion/Facturas por pagar/facturasPorPagar.model";

export default class FacturasPorPagarService {
  async getFacturasPorPagar(id: any = null, empresaId: string) {
    const FacturasPorPagar =
      id === null
        ? await facturasPorPagar.findAll({ where: { empresaId, estado: "1" } })
        : await facturasPorPagar.findOne({
            where: { id, empresaId, estado: "1" },
          });

    return FacturasPorPagar;
  }

  async addfacturasPorPagar(body: IFacturasPorPagar) {
    try {
      const facturaPorPagarResult: any = await facturasPorPagar.create(body);
      const { id } = facturaPorPagarResult.dataValues;

      for await (let detalle of body.detalleFacturaPorPagar) {
        detalle.facturaId = id;
      }
      const detalleFacturaResult = detalleFacturasPorPagar.bulkCreate(
        body.detalleFacturaPorPagar
      );

      return {
        facturaPorPagar: facturaPorPagarResult,
        detalleFacturaPorPagar: detalleFacturaResult,
      };
    } catch (error) {
      return error;
    }
  }

  async deleteFacturasPorPagar(id: string, empresaId: string) {
    await facturasPorPagar.update(
      { estado: "0" },
      { where: { id, empresaId } }
    );
  }

  async updateFacturasPorPagar() {
    return "Las Facturas no se actualizan";
  }
}
