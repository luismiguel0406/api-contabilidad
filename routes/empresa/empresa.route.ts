import {Router} from 'express';
import { deleteEmpresa, getEmpresa , postEmpresa, updateEmpresa} from '../../Controllers/empresas.controller';

const router  = Router();
const endPointEmpresas = '/api/empresas';
const empresa = 'empresa';

router.get(`${endPointEmpresas}/${empresa}/:id?`,getEmpresa); 
router.post(`${endPointEmpresas}`,postEmpresa);
router.put(`${endPointEmpresas}/${empresa}/:id`,updateEmpresa);
router.delete(`${endPointEmpresas}/${empresa}/:id`,deleteEmpresa)

export default router;