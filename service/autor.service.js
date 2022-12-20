//responsavel por chamar o repository, e fazer regras de negocio
import autoresRepository from "../repository/autor.repository.js";
import livroRepository from "../repository/livro.repository.js";
async function criaAutor(autor) {
  return await autoresRepository.criaAutor(autor);
}

async function atualizaAutor(autor) {
  return await autoresRepository.atualizaAutor(autor);
}
async function deleteAutor(autorId) {
  if (await livroRepository.buscaLivrosPorAutor(autorId)) {
    throw new Error(`Autor ${autorId} possui livro atribuido`);
  } else {
    return await autoresRepository.deleteAutor(autorId);
  }
}
async function buscaAutores() {
  return await autoresRepository.buscaAutores();
}
async function buscaAutor(autorId) {
  return await autoresRepository.buscaAutor(autorId);
}
export default {
  criaAutor,
  atualizaAutor,
  buscaAutores,
  deleteAutor,
  buscaAutor,
};
