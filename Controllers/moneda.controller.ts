import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";

import monedaService from "../services/facturacion/monedas.service";

const moneda_Service = new monedaService();

export const getMoneda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const monedaResult = await moneda_Service.getMoneda(id);
    const { statusCode, msg } = MsgRespuesta.noContent;
    if (monedaResult === null) {
      return res.status(statusCode).json({ Message: msg });
    }
    res.status(200).json({ Monedas: monedaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};
export const postMoneda = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await moneda_Service.addMoneda(body);
    const { msg, statusCode } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateMoneda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await moneda_Service.updateMoneda(id, body);

    const { msg, statusCode } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteMoneda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await moneda_Service.deleteMoneda(id);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};
