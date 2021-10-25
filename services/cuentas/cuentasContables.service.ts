import { cuentaContable } from "../../interfaces/cuentaContable.interface";
import cuentaContableModel from "../../models/CuentasContables.model";

export default class cuentasContables {
  async addCuentaContable(cuenta: cuentaContable) {
      console.log(cuenta);
    await cuentaContableModel.create(cuenta);
  }
}
