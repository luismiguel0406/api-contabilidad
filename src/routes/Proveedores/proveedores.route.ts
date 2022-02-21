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
const proveedor = "proveedor"
const tipoProveedor = "tipo";

//PROVEEDORES
router.get(`${endPointProveedores}/${proveedor}:id?`, getProveedores);
router.post(`${endPointProveedores}/${proveedor}`, postProveedor);
router.put(`${endPointProveedores}/${proveedor}/:id`, updateProveedores);
router.delete(`${endPointProveedores}/${proveedor}/:id`, deleteProveedor);

//TIPO PROVEEDORES
router.get(`${endPointProveedores}/${tipoProveedor}:id?`, getTipoProveedor);
router.post(`${endPointProveedores}/${tipoProveedor}`, postTipoProveedor);
router.put(`${endPointProveedores}/${tipoProveedor}/:id`, updateTipoProveedor);
router.delete(`${endPointProveedores}/${tipoProveedor}/:id`, deleteTipoProveedor);

export default router;