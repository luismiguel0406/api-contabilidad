import {Router} from 'express';
import { getMoneda } from '../../Controllers/moneda.controller';

const router = Router();
const endPoint = '/api/facturacion'

router.get(`${endPoint}/monedas/:id`,getMoneda)

export default router;