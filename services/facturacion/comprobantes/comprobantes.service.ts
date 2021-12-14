import { ITipoComprobante } from "../../../interfaces/comprobante.interface";
import tipoComprobantes from "../../../models/Facturacion/comprobantes/tipoComprobante.model";

//----  TIPOS COMPROBANTES -----//
export default class TipoComprobanteService {
  async getTipoComprobante(id: any = null) {
    const tipoComprobanteResult =
      id === null
        ? await tipoComprobantes.findAll({ where: { estado: "1" } })
        : await tipoComprobantes.findOne({ where: { id, estado: "1" } });
    return tipoComprobanteResult;
  };

  async updateTipoComprobante(body: ITipoComprobante, id: string ) {
    await tipoComprobantes.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  };

  async deleteTipoComprobante(id: string) {
    await tipoComprobantes.update({ estado: "0" }, { where: { id } });
  };

  async addTipoComprobante(body: ITipoComprobante) {
    await tipoComprobantes.create(body);
  };
}
