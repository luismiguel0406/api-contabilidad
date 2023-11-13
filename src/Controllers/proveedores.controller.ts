import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import ProveedorService from "../services/proveedor/proveedor.service";

//----------- PROVEEDORES--------------//
const proveedorers_service = new ProveedorService();

export const getProveedores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ProveedoresResult: boolean | any =
      await proveedorers_service.getProveedores(id);
    if (!ProveedoresResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }

    return res.json({ Proveedores: ProveedoresResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const postProveedor = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await proveedorers_service.addProveedor(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const updateProveedores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await proveedorers_service.updateProveedor(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteProveedor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await proveedorers_service.deleteProveedor(Number(id));

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

//---------TIPO PROVEEDORES --------//

export const getTipoProveedor = async (req: Request, res: Response) => {
  try {
    const TipoProveedorResult = await proveedorers_service.getTipoProveedor();
    if (TipoProveedorResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }
    res.json(TipoProveedorResult);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

//------------ TIPO SERVICIO PROVEEDOR----------------//

export const getTipoServicio = async (req: Request, res: Response) => {
  try {
    const result = await proveedorers_service.getTipoServicio();
    if (result.length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }
    res.json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const getTipoDocumento = async (req: Request, res: Response) => {
  try {
    const result = await proveedorers_service.getTipoDocumento();
    if (result.length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }
    res.json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};
