import {Router} from 'express';
import { deleteEmpresa, getEmpresa , postEmpresa, updateEmpresa} from '../../Controllers/empresas.controller';

const router  = Router();
const endPointEmpresas = '/api/empresa'

router.get(`${endPointEmpresas}`,getEmpresa); //filtrar por id
router.post(`${endPointEmpresas}`,postEmpresa);
router.put(`${endPointEmpresas}/deleteEmpresa/:id`,deleteEmpresa);
router.put(`${endPointEmpresas}/updateEmpresa/:id`,updateEmpresa)

export default router;