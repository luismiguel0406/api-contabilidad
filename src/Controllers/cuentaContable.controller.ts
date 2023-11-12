import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import CuentasContablesService from "../services/cuentas/cuentasContables.service";

const cuentaContable_service = new CuentasContablesService();

//--------- CUENTAS CONTABLES ----------//

export const getCuentasContables = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { empresaId } = req;
    const cuentasContables: any =
      await cuentaContable_service.getCuentasContables(id, empresaId);

    if (Object.entries(cuentasContables).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ cuentasContables });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

//CODES HERE

//---------GRUPOS CUENTAS CONTABLES ----------//
export const postGrupoCuentaContable = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await cuentaContable_service.addGrupoCuentaContable(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getGrupoCuentasContables = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const grupoCuentaResult: any =
      await cuentaContable_service.getGrupoCuentasContables(id);

    if (Object.entries(grupoCuentaResult).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    res.json({ GrupoCuentas: grupoCuentaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateGrupoCuentasContables = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await cuentaContable_service.updateGrupoCuentaContable(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteGrupoCuentasContables = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    await cuentaContable_service.deleteGrupoCuentaContable(id);

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

//------------MOVIMIENTO DE CUENTAS CONTABLES---------------//

export const postMovimientoCuenta = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await cuentaContable_service.addMovimientoCuenta(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const getMovimientoCuenta = async (req: Request, res: Response) => {
  try {
    const { id, fechaInicio, fechaFin } = req.params;
    let cuentaContableId = Number(id);
    const movimientoCuentas = await cuentaContable_service.getMovimientoCuenta(
      cuentaContableId,
      fechaInicio,
      fechaFin
    );

    if (!movimientoCuentas) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ movimientoCuentas });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
