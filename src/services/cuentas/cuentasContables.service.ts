import tipoCuenta from "../../models/Cuentas Contables/tipoCuenta.model";
import {
  TCuentaContable, TGrupoCuentaContable, TTipoGenerico,
} from "types";
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
            where: { empresaId, estado: true },
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
            where: { id, empresaId, estado: true },
          });
    return cuentaResult;
  }

  async addCuentasContables(body: TCuentaContable) {
    await cuentasContables.create(body);
  }

  async updateCuentaContable(id: string, body: TCuentaContable) {
    await cuentasContables.update(body, { where: { id, estado: true } });
  }

  async deleteCuentaContable(id: string) {
    await cuentasContables.update({ estado: false }, { where: { id } });
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

  async addGrupoCuentaContable(body: TGrupoCuentaContable) {
    await grupoCuentaContableModel.create(body);
  }

  async deleteGrupoCuentaContable(id: string) {
    await grupoCuentaContableModel.update({ estado: false }, { where: { id } });
  }

  async updateGrupoCuentaContable(body: TGrupoCuentaContable, id: string) {
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

  async addTipoCuentaContable(body: TTipoGenerico) {
    await tipoCuenta.create(body);
  }

  async updateTipoCuentaContable(body: TTipoGenerico, id: string) {
    await tipoCuenta.update(body, { where: { id, estado: "1" } });
  }

  async deleteTipoCuentaContable(id: string) {
    await tipoCuenta.update({ estado: false}, { where: { id } });
  }
}
