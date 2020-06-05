//Importando lo necesario
const soap = require('soap');

//Definiendo la URL
const serverData = require('../server');
let url = `http://${serverData.ss_2a_url}:${serverData.ss_2a_port}/${serverData.ss_2a_action}?wsdl`;
let path = 'ss_2a.wsdl';
//Consumiendo funcion ejemplo Soap
async function getAllGustos(username) {
  //Definiendo parametros

  const client = await soap.createClientAsync('src/soap_clients/ss_2a.wsdl');

  let getAllGustosSoap = (args) => {
    return new Promise(resolve => {
      client.getLikes(args, (err, result) => {
          if(err){
              console.log(err);
          }
        console.log(result);
        resolve(result);
      });
    });
  };

  let result = await getAllGustosSoap(username);

  return result;

}


//Exportando las funcionalidades
module.exports = { getAllGustos };


