import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import TipoGastosService from "../services/facturacion/facturasPorPagar/tipoGastos/tipoGastos.service";

const tipoGasto_service = new TipoGastosService();

export const getTipoGastos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoGastoResult: any = await tipoGasto_service.getTipoGastos(id);

    if (Object.entries(tipoGastoResult).length == 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ tipoGastos: tipoGastoResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
