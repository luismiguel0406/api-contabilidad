import jwt from "jsonwebtoken";
import variablesEnv from "../../config/index";

export const registrarToken = (usuarioId: string) => {
  const token = jwt.sign({ _id: usuarioId }, variablesEnv.SECRET_KEY || "", {
    expiresIn: "12h",
  });
  return token
};
