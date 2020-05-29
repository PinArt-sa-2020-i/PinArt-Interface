const requests_ms = require('./requests_ms');

async function getAllTags() {
    
    let response = await requests_ms.getAllTags();
    let etiquetas = [];
    

    if(response.status == 200){
        response.body.forEach(element => {
            etiquetas.push(
                {
                    id: element.id,
                    name: element.name,
                    description: element.description 
                }
            );    
        });

    }
    return etiquetas;
    
}

async function getImagesByTag(args){
    let idTag;
    if(args.idTag.$value == undefined){idTag = args.idTag;}
    else{idTag = args.idTag.$value;}

    let response = await requests_ms.getImagesByTag(idTag);

    let urlImagenes = [];

    if(response.status == 200){    
        response.body.multimediaByTag.forEach(element => {
            urlImagenes.push(element.url)
        });
    }
    
    return urlImagenes;

}

module.exports = {
    getAllTags,
    getImagesByTag
}