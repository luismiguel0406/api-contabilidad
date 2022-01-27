import { IFacturasPorPagar } from "interfaces/facturasPorPagar.interface";
import tipoFacturasPorPagar from "../../../../models/Facturacion/Facturas por pagar/facturasPorPagar.model";

export default class TipoFacturaPorPagarService {
  async getTiposFactura(id: any = null) {
    const Tipofactura =
      id === null
        ? await tipoFacturasPorPagar.findAll({ where: { estado: "1" } })
        : await tipoFacturasPorPagar.findOne({ where: { id, estado: "1" } });

    return Tipofactura;
  }

  async addTipoFactura(body:IFacturasPorPagar){
      await tipoFacturasPorPagar.create(body);

  }

  async updateTipoFacturas(body: IFacturasPorPagar, id: string ) {
    await tipoFacturasPorPagar.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  };

  async deleteTipoFacturas(id: string) {
    await tipoFacturasPorPagar.update({ estado: "0" }, { where: { id } });
  };
}
