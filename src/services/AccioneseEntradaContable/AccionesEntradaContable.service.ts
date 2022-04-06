import accionesEntradasContables from "../../models/AccionEntradaContable/accionEntradaContable.model";

export default class AccionesEntradaContableService {
  async getAccionEntrada(id: number) {
    const accionContable = await accionesEntradasContables.findAll({
      where: { id , estado:"1"}
    });

    return accionContable;

    // CODES HERE
  }
}
