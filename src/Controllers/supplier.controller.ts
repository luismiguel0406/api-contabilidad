import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import SupplierService from "../services/supplier/supplier.service";

//----------- PROVEEDORES--------------//
const suppliers_service = new SupplierService();

export const getSuppliers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await suppliers_service.getSuppliers(id);
    if (Object.keys(result).length === 0) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }

    res.json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const postSupplier = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await suppliers_service.addSupplier(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const updateSupplier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await suppliers_service.updateSupplier(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteSupplier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await suppliers_service.deleteSupplier(Number(id));

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

//---------TIPO PROVEEDORES --------//

export const getTypeSupplier = async (req: Request, res: Response) => {
  try {
    const result = await suppliers_service.getTypeSupplier();
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

//------------ TIPO SERVICIO PROVEEDOR----------------//

export const getTypeService = async (req: Request, res: Response) => {
  try {
    const result = await suppliers_service.getTypeService();
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

//---------------- TIPO DOCUMENTO----------------//

export const getTypeDocument = async (req: Request, res: Response) => {
  try {
    const result = await suppliers_service.getTypeDocument();
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

//------------  ENTIDAD BANCARIA  ----------------//

export const getBank = async (req: Request, res: Response) => {
  try {
    const result = await suppliers_service.getBanks();
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
