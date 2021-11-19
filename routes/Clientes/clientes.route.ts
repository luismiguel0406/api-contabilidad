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

const endPointClientes = "/api/Clientes";
const Cliente = "Cliente";
const tipoCliente ="tipoCliente"

router.get(`${endPointClientes}/${Cliente}/:id?`, getClientes);
router.post(`${endPointClientes}/${Cliente}`, postCliente);
router.put(`${endPointClientes}/${Cliente}/:id`, updateCliente);
router.delete(`${endPointClientes}/${Cliente}/:id`, deleteCliente);

router.get(`${endPointClientes}/${tipoCliente}/:id?`, getTiposClientes);
router.post(`${endPointClientes}/${tipoCliente}`, postTipoCliente);
router.put(`${endPointClientes}/${tipoCliente}/:id`, updateTipoCliente);
router.delete(`${endPointClientes}/${tipoCliente}/:id`, deleteTipoCliente);

export default router;
