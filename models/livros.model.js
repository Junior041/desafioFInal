import Sequelize from "sequelize";
import db from "../repository/db.js";
import Autores from "./autores.model.js";

const Livros = db.define(
  "livros",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);
Livros.belongsTo(Autores, {foreignKey: "autorId"})

export default Livros;