//arquivo responsavel pela verificacao de parametros
import livrosService from "../service/livro.service.js";
async function criaLivro(req, res, next) {
  try {
    const livro = req.body;
    if (livro.valor < 0) {
      throw new Error("valor tem que ser um numero, e tem que ser maior que 0");
    }
    if (!livro.nome || !livro.valor || !livro.autorId) {
      throw new Error("nome, valor, autorid e endereco são obrigatorios.");
    } else {
      livro.estoque = 0;
      res.send(await livrosService.criaLivro(livro));
      global.logger.info(`POST /livro - Cria livro `);
    }
  } catch (err) {
    next(err);
  }
}
async function atualizaLivro(req, res, next) {
  try {
    const livro = req.body;
    if (livro.valor < 0) {
      throw new Error("valor tem que ser um numero, e tem que ser maior que 0");
    }
    if (livro.nome || livro.autorId) {
      throw new Error(
        "nome e autorId nao podem ser alterados."
      );
    }
    if (!livro.livroId || !livro.valor || !livro.estoque ) {
      throw new Error(
        "autorId, nome e valor são obrigatorios."
      );
    } else {
      res.send(await livrosService.atualizaLivro(livro));
      global.logger.info(`POST /livro - atualiza livro `);
    }
  } catch (err) {
    next(err);
  }
}
async function deleteLivro(req, res, next) {
  try {
    res.send(await livrosService.deleteLivro(req.params.livroId));
    global.logger.info(
      `DELETA /exemplo - livro deletado: ${req.params.livroId} `
    );
  } catch (err) {
    next(err);
  }
}
async function buscaLivros(req, res, next) {
  try {
    const response = await livrosService.buscaLivros(req.query.autorId);
    res.send(response);
    global.logger.info(`GET /exemplo - Todos exemplos `);
  } catch (err) {
    next(err);
  }
}
async function buscaLivro(req, res, next) {
  try {
    res.send(await livrosService.buscaLivro(req.params.livroId));
    global.logger.info(`GET /exemplo - livro : ${req.params.livroId} `);
  } catch (err) {
    next(err);
  }
}
export default {
  criaLivro,
  atualizaLivro,
  deleteLivro,
  buscaLivros,
  buscaLivro,
};
