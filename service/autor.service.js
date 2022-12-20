//responsavel por chamar o repository, e fazer regras de negocio
import autoresRepository from "../repository/autor.repository.js";

async function criaAutor(cliente) {
  return await autoresRepository.criaAutor(cliente);
}

async function atualizaAutor(cliente) {
  return await autoresRepository.atualizaAutor(cliente);
}
async function deleteAutor(clienteId) {
  return await autoresRepository.deleteAutor(clienteId);
}
async function buscaAutores() {
  return await autoresRepository.buscaAutores();
}
async function buscaAutor(clienteId) {
  return await autoresRepository.buscaAutor(clienteId);
}
export default {
  criaAutor,
  atualizaAutor,
  buscaAutores,
  deleteAutor,
  buscaAutor
};
