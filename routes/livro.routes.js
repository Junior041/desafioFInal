//arquivo responsavel por direcionamento das rotas
import express from "express";
import livrosController from "../controller/livro.controller.js";
const router = express.Router();

router.post("/", livrosController.criaLivro);
router.put("/", livrosController.atualizaLivro);
router.delete("/:livroId", livrosController.deleteLivro);
router.get("/", livrosController.buscaLivros);
router.get("/:livroId", livrosController.buscaLivro);

//mongodb
router.post("/info", livrosController.criaLivroInfo);
router.put("/info", livrosController.atualizaLivroInfo);
router.delete("/info/:livroId", livrosController.deletaLivroInfo);
router.post("/info/:livroId/avaliacao", livrosController.adicionaAvaliacao);

export default router;
