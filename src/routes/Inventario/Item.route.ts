import { Router } from "express";
import {
  deleteItem,
  deleteTipoItem,
  getItem,
  getTipoItem,
  postItem,
  postTipoItem,
  updateItem,
  updateTipoItem,
} from "../../Controllers/item.controller";

const router = Router();

const endPointInventario = "/api/inventario";
const item = "item";
const tipoItem = "tipoItem";
//-----------ITEM------------//
router.get(`${endPointInventario}/${item}/:id?`, getItem);
router.post(`${endPointInventario}/${item}`, postItem);
router.put(`${endPointInventario}/${item}/:id`, updateItem);
router.delete(`${endPointInventario}/${item}/:id`, deleteItem);

//------TIPO ITEM--------//
router.get(`${endPointInventario}/${tipoItem}/:id?`, getTipoItem);
router.post(`${endPointInventario}/${tipoItem}`, postTipoItem);
router.put(`${endPointInventario}/${tipoItem}/:id`, updateTipoItem);
router.delete(`${endPointInventario}/${tipoItem}/:id`, deleteTipoItem);

export default router;