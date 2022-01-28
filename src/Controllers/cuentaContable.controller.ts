import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import CuentasContablesService from "../services/cuentas/cuentasContables.service";

const cuentaContable_service = new CuentasContablesService();

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
    
    const { id } = req.params;

    const cuentaResult = await cuentaContable_service.getCuentasContables(id);

    if (cuentaResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
 
    res.json({ Cuentas: cuentaResult});
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

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//---------TIPOS CUENTAS CONTABLES ----------//

export const getTiposCuentasContables = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tipoCuentaResult: any =
      await cuentaContable_service.getTiposCuentaContable(id);

    if (Object.entries(tipoCuentaResult).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ TiposCuentas: tipoCuentaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};


