import { Request, Response } from "express";
import { MsgRespuesta } from "../helpers/MensajesError/MensajesRespuestaCliente";
import FacturasPorPagarService from "../services/facturacion/facturasPorPagar/facturasPorPagar.service";

//-------TIPO FACTURAS POR PAGAR -----//

const facturaPorPagar_service = new FacturasPorPagarService();


export const getTipoFactura = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tipoFacturaResult: boolean | any = await facturaPorPagar_service.getTiposFactura(id);
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
   
      const factura:any = await facturaPorPagar_service.addFacturasPorPagar(req.body);
      console.log(factura)
      res.json(factura);   
 
  } catch (error) {
    const { statusCode, msg } = MsgRespuesta.badRequest;
    return res.status(statusCode).json({ Message: msg, error });
  }
};
