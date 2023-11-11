import { Request, Response, NextFunction } from "express";
import { TDataEntradaContable } from "types";
import EntradaContableService from "../services/entradaContable/entradaContable.service";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import FacturasPorPagarService from "../services/facturacion/facturasPorPagar/facturasPorPagar.service";
import sequelizeConnection from "../database";

//-------TIPO FACTURAS POR PAGAR -----//

const facturaPorPagar_service = new FacturasPorPagarService();
const entradaContable_service = new EntradaContableService();

export const getTipoFactura = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoFacturaResult: boolean | any =
      await facturaPorPagar_service.getTiposFactura(id);
    if (!tipoFacturaResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ tipoFacturasPorPagar: tipoFacturaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

//------- FACTURAS POR PAGAR -------//
export const postFacturaPorPagar = async (req: Request, res: Response) => {
  const transaction = await sequelizeConnection.transaction();
  try {
    const factura: any = await facturaPorPagar_service.addFacturasPorPagar(
      req.body,
      transaction
    );

    //ENTRADA CONTABLE
    const data: TDataEntradaContable = {
      payload: "FACTURA_POR_PAGAR",
      id: factura.id,
      total: factura.total,
      comentario: factura.comentario,
      detalle: factura.detalle,
      empresaId: Number(req.empresaId),
      userId: Number(req.userId),
    };
    const result = await entradaContable_service.createEntradaContable(
      data,
      transaction
    );
    const { entradaContable, movimientoCuenta } = result;

    const { statusCode, msg } = MsgRespuesta.created;
    res
      .status(statusCode)
      .json({ factura, entradaContable, movimientoCuenta, Message: msg });

    transaction.commit();
  } catch (error) {
    transaction.rollback();

    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const getFacturasPorPagar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { empresaId } = req;

    const facturasPorPagar: boolean | any =
      await facturaPorPagar_service.getFacturasPorPagar(id, empresaId);

    if (!facturasPorPagar) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ facturasPorPagar });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
