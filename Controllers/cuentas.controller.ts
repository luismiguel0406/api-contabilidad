import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import cuentasContablesPadreService from "../services/cuentas/cuentasContablesPadre.service";

export const getCuentasContablesPadre = async (
  req: Request,
  res: Response,
  next: any
) => {
  const { statusCode, msg } = MsgRespuesta.noContent;
  try {
    const cuentas_service = new cuentasContablesPadreService();
    const cuentas = await cuentas_service.getCuentas();

    if (cuentas === null) {
      return res.status(statusCode).json({ Message: msg });
    }

    res.status(200).json(cuentas);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getCuentaContablePadre = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const { noCuenta } = req.params;
    const cuentas_service = new cuentasContablesPadreService();

    const cuenta = await cuentas_service.getCuenta(noCuenta);
    if (cuenta === null) {
      return res.status(204).json({ Message: "No content" });
    }
    res.status(200).json(cuenta);
  } catch (error) {
    res
      .status(500)
      .json({ Message: "El recurso que esta buscando no existe", error });
  }
};
