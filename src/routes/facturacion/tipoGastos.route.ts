import { getTipoGastos } from '../../Controllers/tipoGasto.controller';
import {Router} from 'express';


const router = Router();
const endPointFacturacion = '/api/facturacion';
const tipoGasto = 'tipogasto';

router.get(`${endPointFacturacion}/${tipoGasto}/:id?`,getTipoGastos);

export default router;