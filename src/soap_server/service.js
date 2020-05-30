//Trayendo operaciones
const operations = require(`./operations`); 


//Definicion del Servicio
let myService = {
    ss_2b: {
        funtions: {
            AllTags: operations.getAllTags,
            ImagesByTag: operations.getImagesByTag
        }
    }
};


module.exports = myService



