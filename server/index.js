require('./config/conexion')

const express =require('express');
const port =(process.env.port || 3000);

//express
const app= express();

///admitir entrada
app.use(express.json())

//config
app.set('port',port)

//rutas
app.use('/', require('../server/rutas'))

/////iniciar express
app.listen(app.get('port'),(error)=>{
  if(error){
    console.log("error al iniciar el servidor")

  }else{
    console.log("servidor iniciado en el puerto:"+port)
  }

})


