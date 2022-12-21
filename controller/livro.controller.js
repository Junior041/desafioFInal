//arquivo responsavel pela verificacao de parametros
import livrosService from "../service/livro.service.js";

async function criaLivro(req, res, next) {
  try {
    const livro = req.body;
    if (livro.valor < 0) {
      throw new Error("valor tem que ser um numero, e tem que ser maior que 0");
    }
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
      throw new Error("nome, valor, estoque, autorid e endereco são obrigatorios.");
    } else {
      console.log("1entro");
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
      throw new Error("nome e autorId nao podem ser alterados.");
    }
    if (!livro.livroId || !livro.valor || !livro.estoque) {
      throw new Error("autorId, nome e valor são obrigatorios.");
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
async function criaLivroInfo(req, res, next) {
  try {
    let livro = req.body;
    if (
      !livro.livroId ||
      !livro.descricao ||
      !livro.paginas ||
      !livro.editora ||
      !livro.avaliacoes
    ) {
      throw new Error(
        "Informações obrigatorias; livroId, descricao, paginas, editora, avaliacoes"
      );
    } else {
      res.send(await livrosService.criaLivroInfo(livro));
    }
  } catch (err) {
    next(err);
  }
}
async function atualizaLivroInfo(req, res, next) {
  try {
    let livro = req.body;
    if (
      !livro.livroId ||
      !livro.descricao ||
      !livro.paginas ||
      !livro.editora ||
      !livro.avaliacoes
    ) {
      throw new Error(
        "Informações obrigatorias; livroId, descricao, paginas, editora, avaliacoes"
      );
    } else {
      res.send(await livrosService.atualizaLivroInfo(livro));
    }
  } catch (err) {
    next(err);
  }
}
async function deletaLivroInfo(req, res, next) {
  try {
    res.send(await livrosService.deletaLivroInfo(req.params.livroId));
    global.logger.info(
      `DELETA /exemplo - livro info deletado: ${req.params.livroId} `
    );
  } catch (err) {
    next(err);
  }
}
async function adicionaAvaliacao(req, res, next) {
  try {
    let livroId = req.params.livroId;
    const avaliacaoBody = req.body;
    if (
      !avaliacaoBody.nome ||
      !avaliacaoBody.nota ||
      !avaliacaoBody.avaliacao
    ) {
      throw new Error(`nome, nota e avaliacaoBody sao obrigatorios`);
    } else {
      let livro = await livrosService.buscaLivroInfo(livroId);
      livro.avaliacoes.push(avaliacaoBody);

      res.send(await livrosService.adicionaAvaliacao(livroId, livro));
    }
  } catch (err) {
    next(err);
  }
}
async function deletaAvaliacao(req, res, next) {
  try {
    let livroId = req.params.livroId;
    let avaliacaoIndex = req.params.avaliacaoIndex;
    if (!avaliacaoIndex || !livroId) {
      throw new Error(`idlivro e idavaliacao são obrigatorios`)
    }else{
      let livro = await livrosService.buscaLivroInfo(livroId)
      livro.avaliacoes = livro.avaliacoes.filter(dado => dado != livro.avaliacoes[avaliacaoIndex])
      res.send(await livrosService.deletaAvaliacao(livroId, livro))
    }
  
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
  criaLivroInfo,
  atualizaLivroInfo,
  deletaLivroInfo,
  adicionaAvaliacao,
  deletaAvaliacao,
};
