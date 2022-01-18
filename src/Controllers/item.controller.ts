import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import ItemService from "../services/inventario/item.service";

const item_service = new ItemService();

//------------------ ITEM ----------------------//
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemResult = await item_service.getItem(id);

    if (itemResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Item: itemResult, Message: msg });
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

export const getTipoItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoItemResult = await item_service.getTipoItem(id);

    if (tipoItemResult === null) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ tipoItem: tipoItemResult, Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const postTipoItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await item_service.addTipoItem(body);

    const { statusCode, msg } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateTipoItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await item_service.updateTipoItem(body, id);

    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteTipoItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await item_service.deleteTipoItem(id);

    const { statusCode, msg } = MsgRespuesta.noContent;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    res.status(statusCode).json({ Message: msg, error });
  }
};
