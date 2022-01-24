import { ITipoGasto } from "interfaces/gasto.interface";
import tipoGasto from "../../../../models/Facturacion/Facturas por pagar/Gastos/gastos.model";

export default class TipoGastosService {
  async getTipoGastos(id: any = null) {
    const tipoGastosResult =
      id === null
        ? await tipoGasto.findAll({ where: { estado: "1" } })
        : await tipoGasto.findOne({ where: { id, estado: "1" } });
    return tipoGastosResult;
  };

  //DEMAS PARA PANEL DE ADMINSTRACION
  
  async addTipoGasto(body: ITipoGasto) {
    const nuevoTipoGasto = await tipoGasto.create(body);
    return nuevoTipoGasto;
  }

  async updateTipoGasto(body: ITipoGasto, id: string) {
    await tipoGasto.update(body, { where: { id } });
  }
  async detleteTipoGasto(id: string) {
    await tipoGasto.update({ estado: "0" }, { where: { id } });
  }
}
