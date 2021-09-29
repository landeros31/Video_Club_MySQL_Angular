const mysql = require('mysql');
const conexion =mysql.createConnection({

  host : 'bud03zrqaqrmvio8rl7k-mysql.services.clever-cloud.com',
  user: 'ulimg1vs4irkkiat',
  password : 'MOjm7UVR2VEASeKQ4E8o',
  port: 3306,
  database : 'bud03zrqaqrmvio8rl7k'
  
  });
  
conexion.connect((err)=>{
  if(err){
    console.log("ha ocurrido un error error"+err)
  }else{
    console.log("DB connect")
  }
});

module.exports=conexion;