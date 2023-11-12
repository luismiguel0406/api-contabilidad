import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import ImpuestoService from "../services/facturacion/impuestos/impuesto.service";

const impuesto_service = new ImpuestoService();

export const getImpuestos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const impuestoResult = await impuesto_service.getImpuestos(id);

    if (impuestoResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Impuestos: impuestoResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const postImpuesto = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await impuesto_service.addImpuesto(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateImpuesto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await impuesto_service.updateImpuesto(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteImpuesto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await impuesto_service.deleteImpuesto(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
