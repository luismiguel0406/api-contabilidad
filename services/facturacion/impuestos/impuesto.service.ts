import { IImpuestos } from "../../../interfaces/impuestos.interface";
import impuetos from "../../../models/Facturacion/impuestos/impuestos.model";

export default class ImpuestoService {
  async getImpuestos(id: any = null) {
    const impuestosResult =
      id === null
        ? await impuetos.findAll({ where: { estado: "1" } })
        : await impuetos.findOne({ where: { id, estado: "1" } });
    return impuestosResult;
  }

  async updateImpuesto(body: IImpuestos, id: string) {
    await impuetos.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteImpuesto(id: string) {
    await impuetos.update({ estado: "0" }, { where: { id } });
  }

  async addImpuesto(body: IImpuestos) {
    await impuetos.create(body);
  }
}
