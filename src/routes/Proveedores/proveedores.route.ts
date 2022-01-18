import { Router } from "express";
import {
  deleteProveedor,
  deleteTipoProveedor,
  getProveedores,
  getTipoProveedor,
  postProveedor,
  postTipoProveedor,
  updateProveedores,
  updateTipoProveedor,
} from "../../Controllers/proveedores.controller";

const router = Router();
const endPointProveedores = "/api/proveedores";
const tipoProveedor = "tipo";

//PROVEEDORES
router.get(`${endPointProveedores}/:id?`, getProveedores);
router.post(`${endPointProveedores}`, postProveedor);
router.put(`${endPointProveedores}/:id`, updateProveedores);
router.delete(`${endPointProveedores}/:id`, deleteProveedor);

//TIPO PROVEEDORES
router.get(`${endPointProveedores}/${tipoProveedor}:id?`, getTipoProveedor);
router.post(`${endPointProveedores}/${tipoProveedor}`, postTipoProveedor);
router.put(`${endPointProveedores}/${tipoProveedor}/:id`, updateTipoProveedor);
router.delete(`${endPointProveedores}/${tipoProveedor}/:id`, deleteTipoProveedor);

export default router;