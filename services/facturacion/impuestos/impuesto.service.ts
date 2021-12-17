import { IImpuestos } from "../../../interfaces/impuestos.interface";
import impuetosModel from "../../../models/Facturacion/impuestos/impuestos.model";

export default class ImpuestoService {
  async getImpuestos(id: any = null) {
    const impuestosResult =
      id === null
        ? await impuetosModel.findAll({ where: { estado: "1" } })
        : await impuetosModel.findOne({ where: { id, estado: "1" } });
    return impuestosResult;
  }

  async updateImpuesto(body: IImpuestos, id: string) {
    await impuetosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteImpuesto(id: string) {
    await impuetosModel.update({ estado: "0" }, { where: { id } });
  }

  async addImpuesto(body: IImpuestos) {
    await impuetosModel.create(body);
  }
}
