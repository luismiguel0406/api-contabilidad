import { Router } from "express";
import {
  deleteCliente,
  deleteTipoCliente,
  getClientes,
  getTiposClientes,
  postCliente,
  postTipoCliente,
  updateCliente,
  updateTipoCliente,
} from "../../Controllers/clientes.controller";

const router = Router();

const endPointClientes = "/api/clientes";
const tiposClientes = "tipoCliente";

router.get(`${endPointClientes}/:id?`, getClientes);
router.post(`${endPointClientes}`, postCliente);
router.put(`${endPointClientes}/:id`, updateCliente);
router.delete(`${endPointClientes}/:id`, deleteCliente);

router.get(`${endPointClientes}/${tiposClientes}/:id?`, getTiposClientes);
router.post(`${endPointClientes}/${tiposClientes}`, postTipoCliente);
router.put(`${endPointClientes}/${tiposClientes}/:id`, updateTipoCliente);
router.delete(`${endPointClientes}/${tiposClientes}/:id`, deleteTipoCliente);

export default router;
