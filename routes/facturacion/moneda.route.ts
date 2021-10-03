import {Router} from 'express';
import { getMoneda } from '../../Controllers/moneda.controller';

const router = Router();

router.get('/',getMoneda)

export default router;