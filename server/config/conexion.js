const mysql = require('mysql');
const conexion =mysql.createConnection({

  host : 'localhost',
  user: 'root',
  password : 'sebastian31',
  port: 3306,
  database : 'movie'
  
  });
  
conexion.connect((err)=>{
  if(err){
    console.log("ha ocurrido un error error"+err)
  }else{
    console.log("DB connect")
  }
});

module.exports=conexion;