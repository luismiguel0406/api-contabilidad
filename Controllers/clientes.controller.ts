import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import ClientesService from "../services/clientes/Clientes.service";


const clientes_service = new ClientesService();

//------------------------CLIENTE--------------------------//

export const getClientes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clientesResult = await clientes_service.getClientes(id);

    if (clientesResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Clientes: clientesResult, Message: msg }); // VER ESTO
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg ,error});
  }
};

export const postCliente = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await clientes_service.addCliente(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {

   const { id } = req.params;
   const { body } = req;
   await clientes_service.updateCliente(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });

  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  try {

   const { id } = req.params;
   await clientes_service.deleteCliente(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });

  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//-------------------------TIPO CLIENTE------------------------//

export const getTiposClientes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoClientesResult = await clientes_service.getTipoCliente(id);

    if (tipoClientesResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ TipoClientes: tipoClientesResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const postTipoCliente = async (req: Request, res: Response) => {
  try {
    
   const { body } = req;
   await clientes_service.addTipoCliente(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateTipoCliente = async (req: Request, res: Response) => {
  try {

   const { id } = req.params;
   const { body } = req;
   await clientes_service.updateTipoCliente(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });

  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteTipoCliente = async (req: Request, res: Response) => {
  try {

   const { id } = req.params;
   await clientes_service.deleteTipoCliente(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });

  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};




