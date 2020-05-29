//Importando lo necesario
const soap = require('soap');

//Definiendo la URL
const serverData = require('../server');
let url = `http://${serverData.ss_2a_url}:${serverData.ss_2a_port}/${serverData.ss_2a_action}?wsdl`;



//Consumiendo funcion ejemplo Soap
function requestClientExample(name, res){
    //Definiendo parametros
    let args = {username: name};
  
    //Crea el cliente
    soap.createClient(url, function(err, client) {
        
        //Llama la funcionalidad
        client.getAllGustos(args, function(err, result) {

            //Hacer algo con la respuesta
            //Procesar, darle formato

            //Respondiendo a la funcionalidad
            res.send(result)
        });
    })
    
}



//Exportando las funcionalidades
module.exports = { requestClientExample}


