import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import TipoComprobanteService from "../services/facturacion/comprobantes/comprobantes.service";

const tipoComprobante_service = new TipoComprobanteService();

export const getTipoComprobante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tipoComprobanteResult =
      await tipoComprobante_service.getTipoComprobante(id);
    if (!tipoComprobanteResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res
      .status(statusCode)
      .json({ TipoComprobante: tipoComprobanteResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postTipoComprobante = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    await tipoComprobante_service.addTipoComprobante(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const updateTipoComprobante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await tipoComprobante_service.updateTipoComprobante(body, id);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteTipoComprobante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await tipoComprobante_service.deleteTipoComprobante(id);
    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
