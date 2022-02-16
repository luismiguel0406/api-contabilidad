import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import TipoFacturaPorPagarService from "../services/facturacion/facturasPorPagar/tipoFacturasPorPagar/tipoFacturasPorPagar.service";

//-------TIPO FACTURAS POR PAGAR -----//

const tipoFactura_service = new TipoFacturaPorPagarService();

export const getTipoFactura = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoFacturaResult: boolean | any = await tipoFactura_service.getTiposFactura(id);
    if (!tipoFacturaResult) {
      const { statusCode, msg } = MsgRespuesta.notFound;
      return res.status(statusCode).json({ Message: msg });
    }
    res.json({ tipoFacturasPorPagar: tipoFacturaResult });
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
//------- FACTURAS POR PAGAR -------//
export const postFacturaPorPagar = async (req: Request, res: Response) => {
  try {
   
   //codes here
   
   
 
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
