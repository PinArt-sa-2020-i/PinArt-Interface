//Importando lo necesario
const soap = require('soap');

//Definiendo la URL
const serverData = require('../server');
let url = `http://${serverData.ss_2a_url}:${serverData.ss_2a_port}/${serverData.ss_2a_action}?wsdl`;



//Consumiendo funcion ejemplo Soap
async function getAllGustos(username){
    //Definiendo parametros
    let args = {username: username};
  
    
    const client = await soap.createClientAsync(url);

    let getAllGustosSoap = (args) =>{
        return new Promise(resolve => {
            client.getAllGustos(args, (err, result) => { resolve(result)});
        });
    }

    let result= await getAllGustosSoap(args);

    return result;
    
}



//Exportando las funcionalidades
module.exports = { getAllGustos}


