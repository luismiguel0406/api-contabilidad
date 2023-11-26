import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import SupplierService from "../services/supplier/supplier.service";
import sequelizeConnection from "../database";
import AddressService from "../services/contacto/address.service";
import { TAddress } from "types";

//----------- PROVEEDORES--------------//
const suppliers_service = new SupplierService();
const address_service = new AddressService();

export const getSuppliers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result: boolean | any = await suppliers_service.getSuppliers(id);
    if (!result) {
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
  const transaction = await sequelizeConnection.transaction();
  try {
    const { body } = req;
    const { address, infoSupplier } = body;

    const supplier: any = await suppliers_service.addSupplier(
      infoSupplier,
      transaction
    );

    const bodyAddress: TAddress = {
      referenceId: supplier.id,
      typeContactId: 2,
      ...address,
    };
    await address_service.addAddress(bodyAddress, transaction);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ message: msg });
    transaction.commit();
  } catch (error) {
    transaction.rollback();
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
