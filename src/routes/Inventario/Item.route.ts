import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItemType,
  postItem,
  updateItem,
} from "../../controllers/item.controller";

const router = Router();

//-----------ITEM------------//
router.get(`/api/inventory/item/:id?`, getItem);
router.post(`/api/inventory/item`, postItem);
router.put(`/api/inventory/item/:id`, updateItem);
router.delete(`/api/inventory/item/:id`, deleteItem);

//------TIPO ITEM--------//
router.get(`/api/inventory/itemType/:id?`, getItemType);

export default router;
