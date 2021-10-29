import { cuentaContable } from "../../interfaces/cuentaContable.interface";
import cuentaContableModel from "../../models/CuentasContables.model";

export default class cuentasContables {
  async getCuentasContables(id: any = null) {
    const cuentaResult =
      id === null
        ? await cuentaContableModel.findAll({ where: { estado: "1" } })
        : await cuentaContableModel.findOne({ where: { id, estado: "1" } });
    return cuentaResult;
  }

  async addCuentaContable(body: cuentaContable) {
    await cuentaContableModel.create(body);
  }

  async deleteCuentaContable(id: string) {
    await cuentaContableModel.update({ estado: "0" }, { where: { id } });
  }

  async updateCuentaContable(body: cuentaContable, id: string) {
    
    await cuentaContableModel.update({ body }, { where: { id, estado: "1" } });
  }
}
