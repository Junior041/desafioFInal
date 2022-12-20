//arquivo responsavel pela verificacao de parametros
import clientesService from "../service/clientes.service.js";


async function criaCliente(req, res, next) {
  try {
    const cliente = req.body;
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "nome, email, senha, telefone e endereco são obrigatorios. "
      );
    } else {
      res.send(await clientesService.criaCliente(cliente));
      global.logger.info(`POST /cliente - Cria cliente `);
    }
  } catch (err) {
    next(err);
  }
}
async function atualizaCliente(req, res, next) {
  try {
    const cliente = req.body;
    if (
      !cliente.clienteId ||
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "clienteId, nome, email, senha, telefone e endereco são obrigatorios. "
      );
    } else {
      res.send(await clientesService.atualizaCliente(cliente));
      global.logger.info(`POST /cliente - atualiza cliente `);
    }
  } catch (err) {
    next(err);
  }
}

async function deleteCliente(req, res, next) {
  try {
    res.send(await clientesService.deleteCliente(req.params.clienteId));
    global.logger.info(`DELETA /exemplo - cliente deletado: ${req.params.clienteId} `);
  } catch (err) {
    next(err);
  }
}
async function buscaClientes(req, res, next) {
  try {
    const response = await clientesService.buscaClientes();
    res.send(response);
    global.logger.info(`GET /exemplo - Todos exemplos `);
  } catch (err) {
    next(err);
  }
}

async function buscaCliente(req, res, next) {
  try {
    res.send(await clientesService.buscaCliente(req.params.clienteId));
    global.logger.info(`GET /exemplo - cliente : ${req.params.clienteId} `);
  } catch (err) {
    next(err);
  }
}
export default {
  criaCliente,
  atualizaCliente,
  deleteCliente,
  buscaClientes,
  buscaCliente,
};
