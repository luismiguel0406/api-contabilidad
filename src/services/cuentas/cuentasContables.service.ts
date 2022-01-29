import tiposCuentaContable from "../../models/Cuentas Contables/tipoCuentaContable.model";
import {
  IGrupoCuentaContable,
  ITipoCuentaContable,
} from "../../interfaces/cuentaContable.interface";
import grupoCuentaContableModel from "../../models/Cuentas Contables/grupoCuentasContables.model";

export default class CuentasContablesService {
  async getGrupoCuentasContables(id: any = null) {
    const cuentaResult =
      id === null
        ? await grupoCuentaContableModel.findAll({
            where: { estado: "1" },
            order: ["cuenta"],
          })
        : await grupoCuentaContableModel.findOne({
            where: { id, estado: "1" },
          });
    return cuentaResult;
  }

  async addGrupoCuentaContable(body: IGrupoCuentaContable) {
    await grupoCuentaContableModel.create(body);
  }

  async deleteGrupoCuentaContable(id: string) {
    await grupoCuentaContableModel.update({ estado: "0" }, { where: { id } });
  }

  async updateGrupoCuentaContable(body: IGrupoCuentaContable, id: string) {
    await grupoCuentaContableModel.update(body, { where: { id, estado: "1" } });
  }

  //-------------TIPO CUENTAS ---------------//

  async getTiposCuentaContable(id: any = null) {
    const tipoCuentaResult =
      id === null
        ? await tiposCuentaContable.findAll({
            where: { estado: "1" },
          })
        : await grupoCuentaContableModel.findOne({
            where: { id, estado: "1" },
          });
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
