import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import CorreoService from "../services/contacto/correos.service";
import TelefonoService from "../services/contacto/telefonos.service";

//CORREOS
const correo_service = new CorreoService();

export const getCorreos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const correoResult = await correo_service.getCorreos(id);
    if (correoResult === null) {
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

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ message: msg, error });
  }
};

//TELEFONOS

const telefono_Service = new TelefonoService();

export const getTelefonos = async(req:Request, res:Response)=>{

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
 
     const { statusCode, msg } = MsgRespuesta.Success;
     res.status(statusCode).json({ Message: msg });
   } catch (error) {
     const { statusCode, msg } = MsgRespuesta.badRequest;
     res.status(statusCode).json({ message: msg, error });
   }
 };

 // DIRECCIONES

 //CODES HERE
