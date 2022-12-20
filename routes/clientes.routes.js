//arquivo responsavel por direcionamento das rotas
import express from "express";
import clientesController from "../controller/clientes.controller.js";
const router = express.Router();

router.post("/", clientesController.criaCliente);
router.put("/", clientesController.atualizaCliente);
router.delete("/:clienteId", clientesController.deleteCliente);
router.get("/", clientesController.buscaClientes);
router.get("/:clienteId", clientesController.buscaCliente);

export default router;
