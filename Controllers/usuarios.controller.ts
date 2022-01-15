import { Response, Request } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import { registrarToken } from "../lib/Token/jsonWebToken";
import { validarContrasena } from "../lib/validaciones/encryptaPw";
import UsuariosService from "../services/usuarios/usuarios.service";

const usuario_service = new UsuariosService();

export const addUsuario = async (req: Request, res: Response) => {
  try {
    const { email, empresaId } = req.body;

    const ExisteUsuario = await usuario_service.getUsuario(email, empresaId);
    if (ExisteUsuario) return res.json("Usuario o contraseña invalida");

    const usuarioCreado = await usuario_service.addUsuario(req.body);
    res.json({ NuevoUsuario: usuarioCreado });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const { email, contrasena, empresaId } = req.params;

    const usuario: any = await usuario_service.getUsuario(email, empresaId);
    if (!usuario) return res.json({ Message: "Usuario o contrasena invalida" });

    const ContrasenaCorrecta: boolean = await validarContrasena(
      contrasena,
      usuario.contrasena
    );
    if (!ContrasenaCorrecta)
      return res.json({ Message: "Usuario o contraseña invalida" });

    const Token: string = registrarToken(usuario.id);
    res
      .header("auth-token", Token)
      .json({
        Usuario: usuario.nombreUsuario,
        Empresa: usuario.empresaId,
        Email: usuario.emaiil,
        Id: usuario.id,
      });
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
