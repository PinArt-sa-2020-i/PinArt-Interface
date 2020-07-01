const fetch = require('node-fetch');

//Definiendo la URL
const serverData = require('../server');
let baseUrlFeedMs = `http://${serverData.feed_url}/${serverData.feed_entryPoint}`;
let baseUrlLabelsMs = `http://${serverData.labels_url}/${serverData.labels_entryPoint}`;

async function getAllTags(){
    let url = baseUrlLabelsMs;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const response = await fetch(url, requestOptions)
        .then(response => {
                return{
                    status: response.status,
                    body: response.json()
                }
        })
        .then(response => {return response;});
    
    return {
        status:response.status,
        body: (await response.body)
    };

}


//Obteniendo todas las imagenes relacionadas con una etiqueta
async function getImagesByTag(idTag){
    let url = `${baseUrlFeedMs}getMultimediaByTag/${idTag}`; 

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const response = await fetch(url, requestOptions)
        .then(response => {
                return{
                    status: response.status,
                    body: response.json()
                }
        })
        .then(response => {return response;});
    
    return {
        status:response.status,
        body: (await response.body)
    };
}

module.exports = {
    getAllTags,
    getImagesByTag
}