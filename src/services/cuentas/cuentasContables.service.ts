import tiposCuentaContable from "../../models/Cuentas Contables/tipoCuentaContable.model";
import {
  ICuentaContable,
  ITipoCuentaContable,
} from "../../interfaces/cuentaContable.interface";
import cuentaContableModel from "../../models/Cuentas Contables/CuentasContables.model";

export default class CuentasContablesService {
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

  //-------------TIPO CUENTAS ---------------//

  async getTiposCuentaContable(id: any = null) {
    const tipoCuentaResult =
      id === null
        ? await tiposCuentaContable.findAll({
            where: { estado: "1" },
          })
        : await cuentaContableModel.findOne({ where: { id, estado: "1" } });
    return tipoCuentaResult;
  }

  async addTipoCuentaContable(body: ITipoCuentaContable) {
    await tiposCuentaContable.create(body);
  }

  async updateTipoCuentaContable(body: ITipoCuentaContable, id: string) {
    await tiposCuentaContable.update(body, { where: { id, estado: "1" } });
  }

  async deleteTipoCuentaContable(id: string) {
    await tiposCuentaContable.update({ estado: "0" }, { where: { id } });
  }
}
