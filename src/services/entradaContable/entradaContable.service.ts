import entradasContables from "../../models/EntradaContable/entradaContableHeader.model";
import { v4 as uuidv4 } from "uuid";
import { IEntradaContable, IEntradaContableDetalle } from "../../interfaces/entradaContable.interface";

export default class EntradaContableService {
  async filtrarEntrada(data: any) {
    const { total, comentario, empresaId, createdAt, usuario, terminal, id } =
      data;

    let entradaHeader:IEntradaContable = {
      noEntrada:uuidv4(),
      totalDebito: total,
      totalCredito: total,
      comentario,
      estado: true,
      createdAt,
      updatedAt: null,
      usuario,
      terminal,
      empresaId,
      transaccionComercialId: 1, // trandsaccion comercial
      transaccionId: id, // id de la accion realzada
    };

    return { entradaHeader };
  }

  async addEntradaContable(payload: string, data: any) {
    const entradaContableSaved: any = await entradasContables.create(data);

    let objetoEntrada: IEntradaContableDetalle;

    data.forEach((element: any) => {
      objetoEntrada.cuenta = element.cuentaContable;
      objetoEntrada.debito = element.valor;
      objetoEntrada.credito = 0;
      objetoEntrada.estado = true;
      objetoEntrada.entradaId = 1;
    });

    //codes here
  }
}
