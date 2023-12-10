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
router.get(`/api/suppliers/supplier:id?`, getSuppliers);
router.post(`/api/suppliers/supplier`, postSupplier);
router.put(`/api/suppliers/supplier/:id`, updateSupplier);
router.delete(`/api/suppliers/supplier/:id`, deleteSupplier);

//TIPO PROVEEDORES
router.get(`/api/suppliers/typeSupplier`, getTypeSupplier);

//TIPO SERVICIO
router.get(`/api/suppliers/typeService`, getTypeService);

//TIPO DOCUMENTO
router.get(`/api/suppliers/typeDocument`, getTypeDocument);

//BANCOS
router.get(`/api/suppliers/bank`, getBank);

export default router;
