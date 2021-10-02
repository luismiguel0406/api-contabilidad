import { Response, Request } from "express"

export const getCuentasPadre = (req:Request , res:Response)=>{

    res.json({message:'Todas las cuentas'})

}