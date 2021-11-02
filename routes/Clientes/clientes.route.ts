import {Router} from "express";
import { getTiposClientes } from "../../Controllers/clientes.controller";


const router = Router();

const endPointClientes = "/api/clientes"
const tiposClientes = "/tipoClientes"

router.get(`${endPointClientes}/${tiposClientes}/:id?`,getTiposClientes);










export default router;