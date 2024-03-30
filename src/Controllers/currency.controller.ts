import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";

import CurrencyService from "../services/facturacion/currency/currency.service";

const currency_service = new CurrencyService();

export const getCurrency = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await currency_service.getCurrency(id);
    if (result === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode } = MsgRespuesta.Success;
    res.status(statusCode).json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};
