//responsavel por chamar o repository, e fazer regras de negocio
import clientesRepository from "../repository/clientes.repository.js";

async function criaCliente(cliente) {
  return await clientesRepository.criaCliente(cliente);
}

async function atualizaCliente(cliente) {
  return await clientesRepository.atualizaCliente(cliente);
}
async function deleteCliente(clienteId) {
  return await clientesRepository.deleteCliente(clienteId);
}
async function buscaClientes() {
  return await clientesRepository.buscaClientes();
}
async function buscaCliente(clienteId) {
  return await clientesRepository.buscaCliente(clienteId);
}
export default {
  criaCliente,
  atualizaCliente,
  buscaClientes,
  deleteCliente,
  buscaCliente
};
