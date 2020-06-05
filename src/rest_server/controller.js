//Llamando al client soap del sistema de software 2a
const SS_2A_CLIENT = require(`../soap_clients/ss_2a_client`);


//Controller de la ruta
async function getAllGustos(req, res){

    //Rescatando parametro - en un get (en post es diferente)
    let username = req.params.username;

    //Llamando a la funcion del cliente soap
    let response = await SS_2A_CLIENT.getAllGustos(username);

    //Retornar resultado
    res.send(response);
}

module.exports = {getAllGustos};
