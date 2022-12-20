import Sequelize from "sequelize";

const sequelize = new Sequelize('mydb','root','',{
  host:"localhost",
  dialect:"mysql",
  define:{
    timestamps: false
  }
});

//verifica conexao
//sequelize.authenticate().then(()=>{
//  console.log(`conectado`);
//}).catch(err => console.log(err))

export default  sequelize ;