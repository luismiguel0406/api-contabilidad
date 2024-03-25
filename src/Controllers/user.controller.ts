import { Response, Request, NextFunction } from "express";
import { MsgRespuesta } from "../helpers/mensajesCliente/MensajesRespuestaCliente";
import { registerToken } from "../lib/Token/jsonWebToken";
import { validPassword } from "../lib/validaciones/encryptaPw";
import UserService from "../services/users/user.service";

const user_service = new UserService();

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, companyId } = req.body;

    const isExists = await user_service.getUser(email, companyId);
    if (isExists) {
      const { statusCode, msg } = MsgRespuesta.badRequest;
      return res
        .status(statusCode)
        .json({ Message: `Usuario o contraseña invalida, ${msg}` });
    }

    const { id: userId, roleId }: any = await user_service.addUser(req.body);

    const token: string = registerToken(userId, roleId, companyId);

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    next();
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, companyId } = req.body;

    const user: any = await user_service.getUser(email, companyId);
    if (!user) {
      const { statusCode, msg } = MsgRespuesta.badRequest;
      return res
        .status(statusCode)
        .json({ Message: `Usuario o contraseña invalida, ${msg}` });
    }
    const isValidPassword: boolean = await validPassword(
      password,
      user.password
    );
    if (!isValidPassword) {
      const { statusCode, msg } = MsgRespuesta.badRequest;
      return res
        .status(statusCode)
        .json({ Message: `Usuario o contraseña invalida, ${msg}` });
    }

    const token: string = registerToken(user.id, user.roleId, user.compayId);
    res.cookie("token", token, {
      sameSite: "none",
      secure: false, //https = true
      httpOnly: true,
    });
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
    await user_service.updateUser(body, id, empresaId);
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
    await user_service.deleteUser(id, empresaId);
    const { statusCode, msg } = MsgRespuesta.noContent;

    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
