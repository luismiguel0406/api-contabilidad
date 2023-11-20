import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import CorreoService from "../services/contacto/correos.service";
import DireccionService from "../services/contacto/direcciones.service";
import TelefonoService from "../services/contacto/telefonos.service";
import TipoContactosService from "../services/contacto/tipoContacto.service";

//------------------------CORREOS--------------------------------//

const correo_service = new CorreoService();

export const getCorreos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const correoResult = await correo_service.getCorreos(id);
    if (!correoResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Correo: correoResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postCorreos = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await correo_service.AddCorreo(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const updateCorreos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await correo_service.updateCorreo(body, id);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteCorreos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await correo_service.deleteCorreo(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//--------------------TELEFONOS-----------------------------//

const telefono_Service = new TelefonoService();

export const getTelefonos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const telefonoResult = await telefono_Service.getTelefonos(id);
    if (telefonoResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Telefono: telefonoResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postTelefonos = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await telefono_Service.AddTelefono(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const updateTelefonos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await telefono_Service.updateTelefono(body, id);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteTelefonos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await telefono_Service.deleteTelefono(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//---------------------- DIRECCIONES---------------------//

const direcciones_service = new DireccionService();

export const getDirecciones = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const direccionesResult = await direcciones_service.getDireccion(id);

    if (direccionesResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res
      .status(statusCode)
      .json({ Direcciones: direccionesResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postDirecciones = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await direcciones_service.addDireccion(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const updateDirecciones = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await direcciones_service.updateDireccion(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteDirecciones = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await direcciones_service.deleteDirecciones(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//--------------------TIPOS CONTACTOS------------------------//

const tipoContacto_Service = new TipoContactosService();

export const getTipoContactos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tipoContactoResult = await tipoContacto_Service.getTipoContactos(id);

    if (tipoContactoResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res
      .status(statusCode)
      .json({ tipoContactos: tipoContactoResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const postTipoContactos = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await tipoContacto_Service.AddTipoContacto(body);
    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const updateTipoContactos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await tipoContacto_Service.updateTipoContacto(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

export const deleteTipoContactos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await tipoContacto_Service.deleteTipoContacto(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};
