//responsavel por chamar o repository, e fazer regras de negocio
import livrosRepository from "../repository/livro.repository.js";
import autorRepository from "../repository/autor.repository.js";
import livroInfo from "../repository/mongodb/livroinfo.respository.js"

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
async function criaLivroInfo(livro) {
  if (!await livrosRepository.buscaLivro(livro.livroId)) {
    throw new Error(`livroId : ${livro.livroId} nao existe`)
  }
  await livroInfo.criaLivroInfo(livro);
  return livroInfo.buscaLivroInfo(livro.livroId)
}
async function atualizaLivroInfo(livro) {
  if (!await livrosRepository.buscaLivro(livro.livroId)) {
    throw new Error(`livroId : ${livro.livroId} nao existe`)
  }
  return await livroInfo.atualizaLivroInfo(livro);
}
async function deletaLivroInfo(livroId) {
  if (!await livrosRepository.buscaLivro(livroId)) {
    throw new Error(`livroId : ${livroId} nao existe`)
  }
  return await livroInfo.deletaLivroInfo(parseInt(livroId));
}
async function buscaLivroInfo(livroId) {
  return await livroInfo.buscaLivroInfo(parseInt(livroId))
}
async function adicionaAvaliacao(livroId, livro) {
  await livroInfo.adicionaAvaliacao(parseInt(livroId), livro)
  return await livroInfo.buscaLivroInfo(parseInt(livroId))
}
export default {
  criaLivro,
  atualizaLivro,
  buscaLivros,
  deleteLivro,
  buscaLivro,
  criaLivroInfo,
  atualizaLivroInfo,
  deletaLivroInfo,
  buscaLivroInfo,
  adicionaAvaliacao,
};
