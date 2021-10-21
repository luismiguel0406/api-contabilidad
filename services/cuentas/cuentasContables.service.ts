import cuentasContablesPadresModel from "../../models/CuentasContablesPadres.model";

export default class cuentasContablesService {
  async getCuentas() {
    const cuentasContables = await cuentasContablesPadresModel.findAll();
    return cuentasContables;
  }

  async getCuenta(noCuenta: string) {
    const cuentContable = await cuentasContablesPadresModel.findAll({
      where: {
        noCuenta,
        estado : "1"
      },
    });

    return cuentContable;
  }
}
