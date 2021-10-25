import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import cuentasContables from "../services/cuentas/cuentasContables.service";

const cuentaContable_service = new cuentasContables();

export const postCuentaContable = async (req: Request, res: Response) => {
  const { statusCode, msg } = MsgRespuesta.created;

  try {
      const {body}= req;
    await cuentaContable_service.addCuentaContable(body);
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
