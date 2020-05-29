//Llamando al client soap del sistema de software 2a
const SS_2A_CLIENT = require(`../soap_clients/ss_2a_client`);


//Controller de la ruta
function getExample(req, res){

    //Rescatando parametro - en un get (en post es diferente)
    let name = req.params.name;

    //Llamando a la funcion del cliente soap
    SS_2A_CLIENT.requestClientExample(name, res);

}

module.exports = {getExample}