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
