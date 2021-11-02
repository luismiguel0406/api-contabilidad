import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import ClientesService from "../services/clientes/Clientes.service";


const clientes_service = new ClientesService();

export const getTiposClientes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clientesResult = await clientes_service.getClientes(id);

    if (clientesResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Clientes: clientesResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg });
  }
};
