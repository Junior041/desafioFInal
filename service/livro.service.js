//responsavel por chamar o repository, e fazer regras de negocio
import livrosRepository from "../repository/livro.repository.js";
import autorRepository from "../repository/autor.repository.js";
async function criaLivro(livro) {
  if (await autorRepository.buscaAutor(livro.autorId)) {
    return await livrosRepository.criaLivro(livro);
  }else{
    throw new Error(`autorId : ${livro.autorId} nao existe`)
  }
}
async function atualizaLivro(livro) {
  return await livrosRepository.atualizaLivro(livro);
}
async function deleteLivro(livroId) {
  return await livrosRepository.deleteLivro(livroId);
}
async function buscaLivros(autorId) {
  if (autorId) {
    return await livrosRepository.buscaLivrosPorAutor(autorId)
  }
  return await livrosRepository.buscaLivros();
}
async function buscaLivro(livroId) {
  return await livrosRepository.buscaLivro(livroId);
}
export default {
  criaLivro,
  atualizaLivro,
  buscaLivros,
  deleteLivro,
  buscaLivro
};
