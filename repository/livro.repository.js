import livrosModel from "../models/livros.model.js";
import autoresModel from "../models/autores.model.js";

//arquivo repsonsavel por fazer interações com banco de dados

async function criaLivro(livro) {
  try {
    return await livrosModel.create(livro);
  } catch (err) {
    throw err;
  }
}
async function atualizaLivro(livro) {
  try {
    await livrosModel.update(livro, {
      where: {
        livroId: livro.livroId,
      },
      attributes: ["valor", "estoque"],
    });
    return await buscaLivro(livro.livroId);
  } catch (err) {
    throw err;
  }
}
async function deleteLivro(livroId) {
  try {
    await livrosModel.destroy({
      where: {
        livroId: livroId,
      },
    });
    return `Livro ${livroId} deletado`;
  } catch (err) {
    throw err;
  }
}
async function buscaLivros() {
  try {
    return await livrosModel.findAll();
  } catch (err) {
    throw err;
  }
}
async function buscaLivro(clientId) {
  try {
    return await livrosModel.findByPk(clientId);
  } catch (err) {
    throw err;
  }
}
async function buscaLivrosPorAutor(autorId) {
  try {
    return await livrosModel.findAll({
      include: [
        {
          model: autoresModel,
          where: {
            autorId: autorId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}



export default {
  criaLivro,
  atualizaLivro,
  deleteLivro,
  buscaLivros,
  buscaLivro,
  buscaLivrosPorAutor,
};
