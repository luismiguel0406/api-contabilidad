import {Router} from 'express';
import { deleteMoneda, getMoneda, postMoneda, updateMoneda } from '../../Controllers/moneda.controller';

const router = Router();
const endPoint = '/api/facturacion'

router.get(`${endPoint}/monedas/:id?`,getMoneda);
router.post(`${endPoint}/addMoneda`,postMoneda);
router.put(`${endPoint}/updateMoneda/:id`,updateMoneda);
router.put(`${endPoint}/deleteMoneda/:id`,deleteMoneda);

export default router;