import clientesModel from "../models/clientes.model.js";
//arquivo repsonsavel por fazer interações com banco de dados

async function criaCliente(cliente) {
  try {
    return await clientesModel.create(cliente);
  } catch (err) {
    throw err;
  }
}
async function atualizaCliente(cliente) {
  try {
    await clientesModel.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });
    return await buscaCliente(cliente.clienteId);
  } catch (err) {
    throw err;
  }
}
async function deleteCliente(clienteId) {
  try {
    await clientesModel.destroy({
      where: {
        clienteId: clienteId,
      },
    });
    return `Cliente ${clienteId} deletado`;
  } catch (err) {
    throw err;
  }
}
async function buscaClientes() {
  try {
    return await clientesModel.findAll({
      attributes: ["clienteId", "nome", "email", "telefone", "endereco"],
    });
  } catch (err) {
    throw err;
  }
}
async function buscaCliente(clientId) {
  try {
    return await clientesModel.findByPk(clientId, {
      attributes: ["clienteId", "nome", "email", "telefone", "endereco"],
    });
  } catch (err) {
    throw err;
  }
}
export default {
  criaCliente,
  atualizaCliente,
  deleteCliente,
  buscaClientes,
  buscaCliente,
};
