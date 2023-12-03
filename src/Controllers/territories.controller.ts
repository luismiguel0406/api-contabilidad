import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import TerritoriesService from "../services/contacto/territories.service";

const territories_service = new TerritoriesService();

export const getProvinces = async (req: Request, res: Response) => {
  try {
    const result = await territories_service.getProvinces();
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

export const postProvinces = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await territories_service.postProvince(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ message: msg, error });
  }
};
