import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import ItemService from "../services/inventario/item.service";

const item_service = new ItemService();

//------------------ ITEM ----------------------//
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await item_service.getItem(id);

    if (result === null) {
      const { statusCode, msg } = MsgRespuesta.noContent;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode } = MsgRespuesta.Success;
    res.status(statusCode).json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await item_service.addItem(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await item_service.updateItem(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await item_service.deleteItem(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

//----------------- TIPO ITEM --------------------//

export const getItemType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await item_service.getItemType(id);

    if (result === null) {
      const { statusCode, msg } = MsgRespuesta.noContent;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode } = MsgRespuesta.Success;
    res.status(statusCode).json(result);
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
