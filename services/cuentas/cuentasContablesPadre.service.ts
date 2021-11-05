import cuentasContablesPadresModel from "../../models/Cuentas Contables/CuentasContablesPadres.model";

export default class CuentasContablesPadreService {
  async getCuenta(noCuenta: any = null) {
    const cuentasContablePadres =
      noCuenta === null
        ? await cuentasContablesPadresModel.findAll({
            where: { estado: "1" },
            order: ["id"],
          })
        : await cuentasContablesPadresModel.findOne({
            where: { noCuenta, estado: "1" },
          });

    return cuentasContablePadres;
  }
}
