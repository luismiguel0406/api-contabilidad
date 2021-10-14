import { NextFunction, Request, Response } from "express";
import empresaService from "../services/empresa/empresa.service";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";

const empresa = new empresaService();

export const getEmpresa = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const empresaResultado = await empresa.getEmpresa(id);
    if (empresaResultado === null) {
      const { msg, statusCode } = MsgRespuesta.noContent;
      return res.status(statusCode).json({ Message: msg });
    }

    res.status(200).json({ Empresas: empresaResultado });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg ,error});
  }
};

export const postEmpresa = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    await empresa.AddEmpresa(body);

    const { msg, statusCode } = MsgRespuesta.created;
    res.status(statusCode).json({ Message: msg });
  } catch (error) {
    const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg ,error});
  }
};

export const deleteEmpresa = async (
  req:Request, 
  res:Response , 
  next:NextFunction
  )=>{

try {
   const {id} = req.params;
   await empresa.deleteEmpresa(id);
   const {statusCode, msg} = MsgRespuesta.Success
   res.status(statusCode).json({Message: msg})

} catch (error) {
   const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg ,error});
}

};

export const updateEmpresa = async (req:Request, res:Response , next :NextFunction)=>{
 
 const {body}= req;
 const {id} = req.params

try {
  
  await empresa.updateEmpresa(body, id);
  const {statusCode, msg} = MsgRespuesta.Success
  res.status(statusCode).json({Message :msg})
  
} catch (error) {
  const { msg, statusCode } = MsgRespuesta.internalError;
    res.status(statusCode).json({ Message: msg ,error});
}

};