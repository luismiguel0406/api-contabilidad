import accionesEntradasContables from "models/AccionEntradaContable/accionEntradaContable.model";

export default class AccionesEntradaContableService {
  async getAccionEntrada(payload: string, tipoCuentaId: number) {
    const accionContable = await accionesEntradasContables.findAll({
      where: { payload, tipoCuentaId },
    });

    return accionContable;

    // CODES HERE
  }
}
