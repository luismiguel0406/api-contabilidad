import tipoGasto from "models/Facturacion/Facturas por pagar/Gastos/gastos.model";

export default class TipoGastosService {
  async getTipoGastos(id: any = null) {
    const tipoGastosResult =
      id === null
        ? await tipoGasto.findAll({ where: { estado: "1" } })
        : await tipoGasto.findOne({ where: { id, estado: "1" } });
        return tipoGastosResult;
  }
}
