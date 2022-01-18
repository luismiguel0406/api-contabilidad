import { NextFunction, Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import empresaService from "../services/empresa/empresa.service";

const empresa_service = new empresaService();

export const getEmpresa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const empresaResultado = await empresa_service.getEmpresa(id);
    if (empresaResultado === null) {
      const { msg, statusCode } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { msg, statusCode } = MsgRespuesta.Success;
    res.status(statusCode).json({ Empresas: empresaResultado, Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const postEmpresa = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await empresa_service.AddEmpresa(body);

    const { msg, statusCode } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteEmpresa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await empresa_service.deleteEmpresa(id);
    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateEmpresa = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    await empresa_service.updateEmpresa(body, id);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg, error });
  }
};
