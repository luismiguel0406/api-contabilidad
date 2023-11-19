import { Router } from "express";
import {
  deleteProveedor,
  getEntidadBancaria,
  getProveedores,
  getTipoDocumento,
  getTipoProveedor,
  getTipoServicio,
  postProveedor,
  updateProveedores,
} from "../../controllers/proveedores.controller";

const router = Router();

//PROVEEDORES
router.get(`/api/proveedores/proveedor:id?`, getProveedores);
router.post(`/api/proveedores/proveedor`, postProveedor);
router.put(`/api/proveedores/proveedor/:id`, updateProveedores);
router.delete(`/api/proveedores/proveedor/:id`, deleteProveedor);

//TIPO PROVEEDORES
router.get(`/api/proveedores/tipoProveedor`, getTipoProveedor);

//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`, getTipoServicio);

//TIPO DOCUMENTO
router.get(`/api/proveedores/tipoDocumento`, getTipoDocumento);

//BANCOS
router.get(`/api/proveedores/entidadBancaria`, getEntidadBancaria);
export default router;
