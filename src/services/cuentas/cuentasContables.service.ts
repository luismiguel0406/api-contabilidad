import tipoCuenta from "../../models/Cuentas Contables/tipoCuenta.model";
import {
  ICuentaContable,
  IGrupoCuentaContable,
  ITipoCuentaContable,
} from "../../interfaces/cuentaContable.interface";
import grupoCuentaContableModel from "../../models/Cuentas Contables/grupoCuenta.model";
import cuentasContables from "../../models/Cuentas Contables/cuentasContables.model";
import grupoCuenta from "../../models/Cuentas Contables/grupoCuenta.model";

export default class CuentasContablesService {
  async getCuentasContables(id: any = null, empresaId: string) {
    const cuentaResult =
      id === null
        ? await cuentasContables.findAll({
            include: [
              {
                model: grupoCuenta,
                attributes: ["descripcion"],
                required: true,
              },
              {
                model: tipoCuenta,
                attributes: ["descripcion"],
                required: true,
              },
            ],
            where: { empresaId, estado: "1" },
          })
        : await cuentasContables.findOne({
            include: [
              {
                model: grupoCuenta,
                attributes: ["descripcion"],
                required: true,
              },
              {
                model: tipoCuenta,
                attributes: ["descripcion"],
                required: true,
              },
            ],
            where: { id, empresaId, estado: "1" },
          });
    return cuentaResult;
  }

  async addCuentasContables(body: ICuentaContable) {
    await cuentasContables.create(body);
  }

  async updateCuentaContable(id: string, body: ICuentaContable) {
    await cuentasContables.update(body, { where: { id, estado: "1" } });
  }

  async deleteCuentaContable(id: string) {
    await cuentasContables.update({ estado: "0" }, { where: { id } });
  }

  //-------------GRUPO CUENTAS ---------------//

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
        ? await tipoCuenta.findAll({
            where: { estado: "1" },
          })
        : await grupoCuentaContableModel.findOne({
            where: { id, estado: "1" },
          });
    return tipoCuentaResult;
  }

  async addTipoCuentaContable(body: ITipoCuentaContable) {
    await tipoCuenta.create(body);
  }

  async updateTipoCuentaContable(body: ITipoCuentaContable, id: string) {
    await tipoCuenta.update(body, { where: { id, estado: "1" } });
  }

  async deleteTipoCuentaContable(id: string) {
    await tipoCuenta.update({ estado: "0" }, { where: { id } });
  }
}
