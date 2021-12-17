import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import MedioDePagoService from "../services/facturacion/medioDePago/medioDePago.service";

const medioDePago_service = new MedioDePagoService();

export const getMedioDePago = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const MedioDePagoResult = await medioDePago_service.getMedioDePago(id);
      if (MedioDePagoResult === null) {
        const { statusCode, msg } = MsgRespuesta.notFound;
        return res.status(statusCode).json({ Message: msg });
      }
      const { statusCode, msg } = MsgRespuesta.Success;
      res.status(statusCode).json({ MedioDePago: MedioDePagoResult, Message: msg });
    } catch (error) {
      const { statusCode, msg } = MsgRespuesta.internalError;
      res.status(statusCode).json({ Message: msg, error });
    }
  };

  export const postMedioDePago = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      await medioDePago_service.addMedioDePago(body);
      const { msg, statusCode } = MsgRespuesta.created;
      res.status(statusCode).json({ Message: msg });
    } catch (error) {
      const { msg, statusCode } = MsgRespuesta.internalError;
      res.status(statusCode).json({ Message: msg, error });
    }
  };
  
  export const updateMedioDePago = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { body } = req;
      await medioDePago_service.updateMedioDePago(id, body);
  
      const { msg, statusCode } = MsgRespuesta.Success;
      res.status(statusCode).json({ Message: msg });
    } catch (error) {
      const { statusCode, msg } = MsgRespuesta.internalError;
      res.status(statusCode).json({ Message: msg, error });
    }
  };
  
  export const deleteMedioDePago = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await medioDePago_service.deleteMedioDePago(id);
  
      const { statusCode, msg } = MsgRespuesta.noContent;
      res.status(statusCode).json({ Message: msg });
    } catch (error) {
      const { msg, statusCode } = MsgRespuesta.internalError;
      res.status(statusCode).json({ Message: msg, error });
    }
  };
  