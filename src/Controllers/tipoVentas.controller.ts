import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import { TipoVentasService } from "../services/facturacion/tipoVentas/tipoVentas.service";

const tipoVenta_service = new TipoVentasService();

export const getTipoVentas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoVentaResult = await tipoVenta_service.getTipoventas(id);
    if (tipoVentaResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ TipoVenta: tipoVentaResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postTipoVenta = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await tipoVenta_service.addTipoVentas(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateTipoVenta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await tipoVenta_service.updateTipoVentas(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteTipoVenta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await tipoVenta_service.deleteTipoVentas(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
