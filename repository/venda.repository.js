import vendaModel from "../models/vendas.model.js";
import clienteModel from "../models/clientes.model.js";
import livroModel from "../models/livros.model.js"

async function criaVenda(venda) {
  try {
    return await vendaModel.create(venda);
  } catch (err) {
    throw err;
  }
}
async function buscaVenda(vendaId) {
  try {
    return await vendaModel.findByPk(vendaId);
  } catch (err) {
    throw err;
  }
}
async function buscaVendas() {
  try {
    return await vendaModel.findAll();
  } catch (err) {
    throw err;
  }
}
async function buscaVendasPorCliente(clienteId) {
  try {
    return await vendaModel.findAll({
      include: [
      {
        model: clienteModel,
        where: {
          clienteId: clienteId,
        },
      },
    ],
    });
  } catch (err) {
    throw err;
  }
}
async function buscaVendasPorLivro(livroId) {
  try {
    return await vendaModel.findAll({
      include: [
      {
        model: livroModel,
        where: {
          livroId: livroId,
        },
      },
    ],
    });
  } catch (err) {
    throw err;
  }
}
async function buscaVendasPorAutor(autorId) {
  try {
    return await vendaModel.findAll({
      include: [
      {
        model: livroModel,
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
  criaVenda,
  buscaVenda,
  buscaVendas,
  buscaVendasPorCliente,
  buscaVendasPorLivro,
  buscaVendasPorAutor,
};
