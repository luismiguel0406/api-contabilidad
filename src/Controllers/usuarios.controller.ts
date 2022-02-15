import { Response, Request, NextFunction } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import { registrarToken } from "../lib/Token/jsonWebToken";
import { validarContrasena } from "../lib/validaciones/encryptaPw";
import UsuariosService from "../services/usuarios/usuarios.service";

const usuario_service = new UsuariosService();

export const RegistrarUsuario = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, empresaId } = req.body;

    const ExisteUsuario = await usuario_service.getUsuario(email, empresaId);
    if (ExisteUsuario) {
      const { statusCode, msg } = MsgRespuesta.badRequest;
      return res
        .status(statusCode)
        .json({ Message: `Usuario o contraseña invalida, ${msg}` });
    }

    const usuarioCreado: any = await usuario_service.addUsuario(req.body);
    const Token: string = registrarToken(usuarioCreado.id, empresaId);

    res.header("auth-token", Token).json({
      Id: usuarioCreado.id,
      Usuario: usuarioCreado.nombreUsuario,
      Empresa: usuarioCreado.empresaId,
      Email: usuarioCreado.email,
      
    });
    next();
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const InicioSesionUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, contrasena, empresaId } = req.body;

    const usuario: any = await usuario_service.getUsuario(email, empresaId);
    if (!usuario) {
      const { statusCode, msg } = MsgRespuesta.badRequest;
      return res
        .status(statusCode)
        .json({ Message: `Usuario o contraseña invalida, ${msg}` });
    }
    const ContrasenaCorrecta: boolean = await validarContrasena(
      contrasena,
      usuario.contrasena
    );
    if (!ContrasenaCorrecta){
      const {statusCode, msg} = MsgRespuesta.badRequest;
      return res.status(statusCode).json({ Message: `Usuario o contraseña invalida, ${msg}`});
    }
    
    const Token: string = registrarToken(usuario.id, usuario.empresaId);
    res.header("auth-token", Token).json({
      Id: usuario.id,
      Usuario: usuario.nombreUsuario,
      Empresa: usuario.empresaId,
      Email: usuario.email,
      Message:`Bienvenido ${usuario.nombreUsuario}`});
    next();
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
