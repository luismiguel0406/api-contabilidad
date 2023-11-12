import { Router } from "express";
import {
  deleteProveedor,
  deleteTipoProveedor,
  getProveedores,
  getTipoProveedor,
  getTipoServicio,
  postProveedor,
  postTipoProveedor,
  updateProveedores,
  updateTipoProveedor,
} from "../../controllers/proveedores.controller";

const router = Router();

//PROVEEDORES
router.get(`/api/proveedores/proveedor:id?`, getProveedores);
router.post(`/api/proveedores/proveedor`, postProveedor);
router.put(`/api/proveedores/proveedor/:id`, updateProveedores);
router.delete(`/api/proveedores/proveedor/:id`, deleteProveedor);

//TIPO PROVEEDORES
router.get(`/api/proveedores/tipoProveedor/:id?`, getTipoProveedor);
router.post(`/api/proveedores/tipoProveedor`, postTipoProveedor);
router.put(`/api/proveedores/:id`, updateTipoProveedor);

//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`,getTipoServicio);

export default router;
