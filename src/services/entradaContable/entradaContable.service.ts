import entradasContables from "../../models/EntradaContable/entradaContable.model";
import { v4 as uuidv4 } from "uuid";
import {
  IEntradaContable,
  IEntradaContableDetalle,
} from "../../interfaces/entradaContable.interface";

export default class EntradaContableService {


  async facturaPorPagar(data: any) {

    const { total, comentario, empresaId, createdAt, usuario, terminal, id, detalleFacturaPorPagar } =
    data;
     
    let entradaContable: IEntradaContable = {
      noEntrada: 25,
      totalDebito: total,
      totalCredito: total,
      comentario,
      estado: true,
      createdAt,
      updatedAt: null,
      usuario,
      terminal,
      empresaId,
      transaccionComercialId: 1, // Transaccion comercial  ejemplo: factura, pago , etc
      transaccionId: id, // Id de la accion realzada
      detalle: [
        {
          debito: 1,
          credito: 2,
          descripcionCuenta: "No descripcion",
          cuenta: "4654654",
        },
        {
          debito: 1,
          credito: 2,
          descripcionCuenta: "No descripcion",
          cuenta: "4654654",
        },
      ],
    };

    return  entradaContable ;
  }

  
}
