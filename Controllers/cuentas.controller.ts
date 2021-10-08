import { Response, Request } from "express";
import cuentasContablesService from "../services/cuentas/cuentasContables.service";


export const getCuentasContablesPadre = async (req: Request, res: Response, next:any) => {
  try {
    const cuentas_service = new cuentasContablesService();
    const cuentas = await cuentas_service.getCuentas();

    if (cuentas === null){
        return res.status(204).json({Message:'No content'})        
    }
    res.status(200).json(cuentas);
  } catch (error) {
    res.status(500).json({ Message: "El recurso que esta buscando no existe", error });
  }
};

export const getCuentaContablePadre = async (req:Request, res:Response, next:any)=>{
    try {
        const { noCuenta } = req.params;
        const cuentas_service = new cuentasContablesService();
        
        const cuenta = await cuentas_service.getCuenta(noCuenta);
        if (cuenta === null){
          return res.status(204).json({Message:'No content'})        
      }
        res.status(200).json(cuenta);
    }catch (error) {
        res.status(500).json({ Message: "El recurso que esta buscando no existe", error });
    }
    
}
