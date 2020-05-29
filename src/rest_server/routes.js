//Importando modulos
const express = require('express')
const api = express.Router()

//Importando el controller
const controller = require(`./controller`);

//Servicio  Example
api.get('/getExample/:name', controller.getExample);


//Proof
api.get('/user', (req, res) => {
    res.send("melo");
})


module.exports = api