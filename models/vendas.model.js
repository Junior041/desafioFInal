import db from "../repositories/db.js";
import Sequelize from "sequelize";
import Cliente from "./clientes.model.js";
import Livros from "./livros.model.js";

const Vendas = db.define(
  "vendas",
  {
    vendasId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);
Vendas.belongsTo(Cliente, {foreignKey: "clienteId"})
Vendas.belongsTo(Livros, {foreignKey: "livroId"})

export default Vendas;