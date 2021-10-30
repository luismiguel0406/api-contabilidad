import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import cuentasContables from "../services/cuentas/cuentasContables.service";

const cuentaContable_service = new cuentasContables();

export const postCuentaContable = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await cuentaContable_service.addCuentaContable(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getCuentasContables = async (req: Request, res: Response) => {
  try {
    const { statusCode, msg } = MsgRespuesta.Success;
    const { id } = req.params;

    const cuentaResult = await cuentaContable_service.getCuentasContables(id);

    if (cuentaResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.status(statusCode).json({ Cuentas: cuentaResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateCuentasContables = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await cuentaContable_service.updateCuentaContable(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteCuentasContables = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await cuentaContable_service.deleteCuentaContable(id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
