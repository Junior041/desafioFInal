import vendaService from "../service/venda.service.js";
async function criaVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.data || !venda.clienteId || !venda.livroId ) {
      throw new Error(`clienteId e livroId são obrigatorios`)
    }else{
      global.logger.info(`POST /venda - Cria venda `);
      let livroId = venda.livroId
      res.send(await vendaService.criaVenda(venda, livroId));
    }
  } catch (err) {
    next(err);
  }
}

async function buscaVenda(req, res, next) {
  try {
    const vendaId = req.params.vendaId
    if (vendaId < 0 || !vendaId) {
      throw new Error(`vendaId invalido`)
    }
    res.send(await vendaService.buscaVenda(vendaId))
  } catch (err) {
    next(err)
  }  
}
async function buscaVendas(req, res, next) {
  try {
    res.send(await vendaService.buscaVendas(req.query))
  } catch (err) {
    next(err)
  }  
}

export default {
  criaVenda,
  buscaVenda,
  buscaVendas,
};
