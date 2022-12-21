//responsavel por chamar o repository, e fazer regras de negocio
import livroRepository from "../repository/livro.repository.js";
import vendaRepository from "../repository/venda.repository.js";

async function criaVenda(venda, livroId) {
  let livro = await livroRepository.buscaLivro(livroId);
  venda.valor = livro.valor;
  if (livro.estoque < 0) {
    throw new Error(`Livro sem estoque`);
  } else {
    livro.estoque--
    await livroRepository.atualizaLivro(livro.dataValues)
    await vendaRepository.criaVenda(venda)
    return venda
  }
}
async function buscaVenda(vendaId) {
  return await vendaRepository.buscaVenda(vendaId)
}
async function buscaVendas(query) {
  if (query.clienteId) {
    return await vendaRepository.buscaVendasPorCliente(query.clienteId)
  }
  if (query.livroId) {
    return await vendaRepository.buscaVendasPorLivro(query.livroId)
  }
  if (query.autorId) {
    return await vendaRepository.buscaVendasPorAutor(query.autorId)
  }
  return await vendaRepository.buscaVendas()
}

export default {
  criaVenda,
  buscaVenda,
  buscaVendas,
};
