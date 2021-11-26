//codes here
import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import ProveedorService from "../services/proveedor/proveedor.service";

//----------- PROVEEDORES--------------//
const proveedorers_service = new ProveedorService();

export const getProveedores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ProveedoresResult = await proveedorers_service.getProveedores(id);
    if (ProveedoresResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    return res
      .status(statusCode)
      .json({ Proveedores: ProveedoresResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const postProveedor = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await proveedorers_service.addProveedor(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateProveedores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await proveedorers_service.updateProveedor(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteProveedor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await proveedorers_service.deleteProveedor(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

//---------TIPO PROVEEDORES --------//

export const getTipoProveedor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const TipoProveedorResult = await proveedorers_service.getTipoProveedor(id);
    if (TipoProveedorResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    return res
      .status(statusCode)
      .json({ TipoProveedor: TipoProveedorResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const postTipoProveedor = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await proveedorers_service.addTipoProveedor(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateTipoProveedor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await proveedorers_service.updateTipoProveedor(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteTipoProveedor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await proveedorers_service.deleteTipoProveedor(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
