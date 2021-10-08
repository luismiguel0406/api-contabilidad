import {Router} from 'express';
import { getEmpresa } from '../../Controllers/empresas.controller';

const router  = Router();
const endPointEmpresas = '/api/empresa'


router.get(`${endPointEmpresas}`,getEmpresa) //filtrar por id

export default router;