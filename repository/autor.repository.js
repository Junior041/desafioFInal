import autoresModel from "../models/autores.model.js";
//arquivo repsonsavel por fazer interações com banco de dados

async function criaAutor(autor) {
  try {
    return await autoresModel.create(autor);
  } catch (err) {
    throw err;
  }
}
async function atualizaAutor(autor) {
  try {
    await autoresModel.update(autor, {
      where: {
        autorId: autor.autorId,
      },
    });
    return await buscaAutor(autor.autorId);
  } catch (err) {
    throw err;
  }
}
async function deleteAutor(autorId) {
  try {
    await autoresModel.destroy({
      where: {
        autorId: autorId,
      },
    });
    return `Autor ${autorId} deletado`;
  } catch (err) {
    throw err;
  }
}
async function buscaAutores() {
  try {
    return await autoresModel.findAll({
      attributes: ["autorId", "nome", "email", "telefone"],
    });
  } catch (err) {
    throw err;
  }
}
async function buscaAutor(clientId) {
  try {
    return await autoresModel.findByPk(clientId, {
      attributes: ["autorId", "nome", "email", "telefone"],
    });
  } catch (err) {
    throw err;
  }
}
export default {
  criaAutor,
  atualizaAutor,
  deleteAutor,
  buscaAutores,
  buscaAutor,
};
