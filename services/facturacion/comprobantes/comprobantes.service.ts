import { ITipoComprobante } from "../../../interfaces/comprobante.interface";
import tipoComprobantesModel from "../../../models/Facturacion/comprobantes/tipoComprobante.model";

//----  TIPOS COMPROBANTES -----//
export default class TipoComprobanteService {
  async getTipoComprobante(id: any = null) {
    const tipoComprobanteResult =
      id === null
        ? await tipoComprobantesModel.findAll({ where: { estado: "1" } })
        : await tipoComprobantesModel.findOne({ where: { id, estado: "1" } });
    return tipoComprobanteResult;
  };

  async updateTipoComprobante(body: ITipoComprobante, id: string ) {
    await tipoComprobantesModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  };

  async deleteTipoComprobante(id: string) {
    await tipoComprobantesModel.update({ estado: "0" }, { where: { id } });
  };

  async addTipoComprobante(body: ITipoComprobante) {
    await tipoComprobantesModel.create(body);
  };
}
