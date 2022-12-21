//responsavel por chamar o repository, e fazer regras de negocio
import clientesRepository from "../repository/clientes.repository.js";
import vendaRepository from "../repository/venda.repository.js";

async function criaCliente(cliente) {
  return await clientesRepository.criaCliente(cliente);
}
async function atualizaCliente(cliente) {
  return await clientesRepository.atualizaCliente(cliente);
}
async function deleteCliente(clienteId) {
  let temVenda = await vendaRepository.buscaVendasPorCliente(clienteId);
  if (temVenda.length > 0) {
    return `cliente possui venda`;
  }
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
