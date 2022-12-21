import express from "express";
import vendaController from "../controller/venda.controller.js";
const router = express.Router();

router.post("/", vendaController.criaVenda);
router.get("/:vendaId", vendaController.buscaVenda);
router.get("/", vendaController.buscaVendas);


export default router;
