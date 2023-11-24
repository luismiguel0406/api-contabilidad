import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import ProveedorService from "../services/proveedor/proveedor.service";
import sequelizeConnection from "../database";
import DireccionService from "../services/contacto/direcciones.service";
import { TDireccion } from "types";

//----------- PROVEEDORES--------------//
const proveedorers_service = new ProveedorService();
const direccion_service = new DireccionService();

export const getProveedores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const proveedoresResult: boolean | any =
      await proveedorers_service.getProveedores(Number(id));
    if (!proveedoresResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ message: msg });
    }

    res.json(proveedoresResult);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};

export const postProveedor = async (req: Request, res: Response) => {
  const transaction = await sequelizeConnection.transaction();
  try {
    const { body } = req;
    const { address, infoSupplier } = body;

    const proveedor: any = await proveedorers_service.addProveedor(
      infoSupplier,
      transaction
    );

    const bodyDireccion: TDireccion = {
      referenciaContactoId: proveedor.id,
      tipoContactoId: 2,
      ...address,
    };
    await direccion_service.addDireccion(bodyDireccion, transaction);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ message: msg });
    transaction.commit();
  } catch (error) {
    transaction.rollback();
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

//---------------- TIPO DOCUMENTO----------------//

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

//------------  ENTIDAD BANCARIA  ----------------//

export const getEntidadBancaria = async (req: Request, res: Response) => {
  try {
    const result = await proveedorers_service.getEntidadBancaria();
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
