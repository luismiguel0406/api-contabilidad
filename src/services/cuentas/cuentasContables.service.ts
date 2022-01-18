import { ICuentaContable } from "../../interfaces/cuentaContable.interface";
import cuentaContableModel from "../../models/Cuentas Contables/CuentasContables.model";

export default class CuentasContables {
  async getCuentasContables(id: any = null) {
    const cuentaResult =
      id === null
        ? await cuentaContableModel.findAll({
            where: { estado: "1" },
            order: ["cuenta"],
          })
        : await cuentaContableModel.findOne({ where: { id, estado: "1" } });
    return cuentaResult;
  }

  async addCuentaContable(body: ICuentaContable) {
    await cuentaContableModel.create(body);
  }

  async deleteCuentaContable(id: string) {
    await cuentaContableModel.update({ estado: "0" }, { where: { id } });
  }

  async updateCuentaContable(body: ICuentaContable, id: string) {
    await cuentaContableModel.update(body, { where: { id, estado: "1" } });
  }
}
