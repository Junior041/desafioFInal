//arquivo responsavel por direcionamento das rotas
import express from "express";
import autoresController from "../controller/autor.controller.js";
const router = express.Router();

router.post("/", autoresController.criaAutor);
router.put("/", autoresController.atualizaAutor);
router.delete("/:autorId", autoresController.deleteAutor);
router.get("/", autoresController.buscaAutores);
router.get("/:autorId", autoresController.buscaAutor);

export default router;
