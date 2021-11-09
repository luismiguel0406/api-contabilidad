import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import CuentasContablesPadreService from "../services/cuentas/cuentasContablesPadre.service";

const cuentas_service = new CuentasContablesPadreService();

export const getCuentasContablesPadre = async (req: Request,  res: Response) => {
  
  try {
    const { noCuenta } = req.params;
    const cuentasResult = await cuentas_service.getCuenta(noCuenta);

    if (cuentasResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Cuentas: cuentasResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};


