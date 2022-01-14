import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import UsuariosService from "../services/usuarios/usuarios.service";

const usuario_service = new UsuariosService();
export const addUsuario = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const usuarioCreado = await usuario_service.addUsuario(body);
    return res.json({ NuevoUsuario: usuarioCreado });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id, empresaId } = req.params;
    const usuario = await usuario_service.getUsuario(id, empresaId);
    if (Object.entries(usuario).length == 0) return res.json("No hay usuarios");
    res.json({ usuario });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id, empresaId } = req.params;
    await usuario_service.updateUsuario(body, id, empresaId);
    const { statusCode, msg } = MsgRespuesta.Success;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const { id, empresaId } = req.params;
    await usuario_service.deleteUsuario(id, empresaId);
    const { statusCode, msg } = MsgRespuesta.noContent;

    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
