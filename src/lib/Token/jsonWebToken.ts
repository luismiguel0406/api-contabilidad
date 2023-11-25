import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../../config/index";
import { MsgRespuesta } from "../../helpers/mensajesCliente/MensajesRespuestaCliente";
import { Ttoken } from "types";

export const registerToken = (
  userId: number,
  roleId: number,
  companyId: number
) => {
  const token: string = jwt.sign(
    { userId, roleId, companyId },
    String(env.SECRET_KEY),
    {
      expiresIn: "12h",
    }
  );
  return token;
};

export const validToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      const { statusCode, msg } = MsgRespuesta.unAuthorized;
      return res.status(statusCode).json({ Message: msg });
    }
    const Payload = jwt.verify(token, String(env.SECRET_KEY)) as Ttoken;
    req.userId = Payload.userId;
    req.companyId = Payload.companyId;
    req.username = Payload.username;
    req.roleId = Payload.roleId;

    next();
  } catch (error) {
    return next(error);
  }
};
