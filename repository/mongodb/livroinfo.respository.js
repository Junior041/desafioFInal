import { getClient } from "./mongo.db.js";

async function criaLivroInfo(livro) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("desafio").collection("livroInfo").insertOne(livro);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function atualizaLivroInfo(livro) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("desafio")
      .collection("livroInfo")
      .updateOne({ livroId: livro.livroId }, { $set: { ...livro } });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function deletaLivroInfo(livroId) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("desafio")
      .collection("livroInfo")
      .deleteOne({ livroId: livroId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function adicionaAvaliacao(livroId, livro) {
  console.log(livro);
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("desafio")
      .collection("livroInfo")
      .updateOne({ livroId: livroId }, { $set: { ...livro } });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function buscaLivroInfo(livroId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("desafio")
      .collection("livroInfo")
      .findOne({ livroId: livroId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function deletaAvaliacao(livroId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("desafio")
      .collection("livroInfo")
      .findOne({ livroId: livroId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  criaLivroInfo,
  atualizaLivroInfo,
  deletaLivroInfo,
  adicionaAvaliacao,
  buscaLivroInfo,
  deletaAvaliacao,
};
