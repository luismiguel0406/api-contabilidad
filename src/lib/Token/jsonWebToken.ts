import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import variablesEnv from "../../config/index";
import { MsgRespuesta } from "../../helpers/MensajesError/MensajesRespuestaCliente";
import { IPayloadToken } from "../../interfaces/token.interface";

export const registrarToken = (usuarioId: string) => {
 
  const token:string = jwt.sign({ _id: usuarioId }, variablesEnv.SECRET_KEY || "", {
    expiresIn: "2m",
  });
  return token;
};

export const ValidarToken = ( req: Request, res: Response, next: NextFunction) => { 
  try {
    const Token = req.header("auth-token");
    if (!Token) {
      const { statusCode, msg } = MsgRespuesta.unauthorized;
      return res.status(statusCode).json({ Message: msg });
    }
    const Payload = jwt.verify(
      Token,
      variablesEnv.SECRET_KEY || ""
    ) as IPayloadToken;
    req.userId = Payload._id;
    next();
  } catch (error) {
    return next(error);
  }
 
};
