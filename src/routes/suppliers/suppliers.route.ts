import { Router } from "express";
import {
  deleteSupplier,
  getBank,
  getSuppliers,
  getTypeDocument,
  getTypeSupplier,
  getTypeService,
  postSupplier,
  updateSupplier,
} from "../../controllers/supplier.controller";

const router = Router();

//PROVEEDORES
router.get(`/api/proveedores/proveedor:id?`, getSuppliers);
router.post(`/api/proveedores/proveedor`, postSupplier);
router.put(`/api/proveedores/proveedor/:id`, updateSupplier);
router.delete(`/api/proveedores/proveedor/:id`, deleteSupplier);

//TIPO PROVEEDORES
router.get(`/api/proveedores/tipoProveedor`, getTypeSupplier);

//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`, getTypeService);

//TIPO DOCUMENTO
router.get(`/api/proveedores/tipoDocumento`, getTypeDocument);

//BANCOS
router.get(`/api/proveedores/banco`, getBank);

export default router;
