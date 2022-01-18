import { Router} from "express";
import { 
     deleteTipoComprobante,
     getTipoComprobante, 
     postTipoComprobante, 
     updateTipoComprobante } from "../../Controllers/comprobante.controller";

 const router = Router();
 const endPointFacturacion = '/api/facturacion';
 const TipoComprobante = 'tipoComprobante';

 router.get(`${endPointFacturacion}/${TipoComprobante}/:id?`,getTipoComprobante);
 router.post(`${endPointFacturacion}/${TipoComprobante}`,postTipoComprobante);
 router.put(`${endPointFacturacion}/${TipoComprobante}/:id`,updateTipoComprobante);
 router.delete(`${endPointFacturacion}/${TipoComprobante}/:id`,deleteTipoComprobante);

 export default router;