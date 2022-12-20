//arquivo responsavel pela verificacao de parametros
import autoresService from "../service/autor.service.js"
async function criaAutor(req, res, next) {
  try {
    const autor = req.body;
    if (
      !autor.nome ||
      !autor.email ||
      !autor.telefone ||
      !autor.endereco
    ) {
      throw new Error(
        "nome, email, telefone e endereco são obrigatorios. "
      );
    } else {
      res.send(await autoresService.criaAutor(autor));
      global.logger.info(`POST /autor - Cria autor `);
    }
  } catch (err) {
    next(err);
  }
}
async function atualizaAutor(req, res, next) {
  try {
    const autor = req.body;
    if (
      !autor.autorId ||
      !autor.nome ||
      !autor.email ||
      !autor.telefone ||
      !autor.endereco
    ) {
      throw new Error(
        "autorId, nome, email, telefone e endereco são obrigatorios. "
      );
    } else {
      res.send(await autoresService.atualizaAutor(autor));
      global.logger.info(`POST /autor - atualiza autor `);
    }
  } catch (err) {
    next(err);
  }
}
async function deleteAutor(req, res, next) {
  try {
    res.send(await autoresService.deleteAutor(req.params.autorId));
    global.logger.info(`DELETA /exemplo - autor deletado: ${req.params.autorId} `);
  } catch (err) {
    next(err);
  }
}
async function buscaAutores(req, res, next) {
  try {
    const response = await autoresService.buscaAutores();
    res.send(response);
    global.logger.info(`GET /exemplo - Todos exemplos `);
  } catch (err) {
    next(err);
  }
}
async function buscaAutor(req, res, next) {
  try {
    res.send(await autoresService.buscaAutor(req.params.autorId));
    global.logger.info(`GET /exemplo - autor : ${req.params.autorId} `);
  } catch (err) {
    next(err);
  }
}
export default {
  criaAutor,
  atualizaAutor,
  deleteAutor,
  buscaAutores,
  buscaAutor,
};
