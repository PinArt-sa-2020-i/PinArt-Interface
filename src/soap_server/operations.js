const requests_ms = require('./requests_ms');

async function getAllTags() {
    
    let response = await requests_ms.getAllTags();
    let tag = [];
    

    if(response.status == 200){
        response.body.forEach(element => {
            tag.push(
                {
                    id: element.id,
                    name: element.name,
                    description: element.description 
                }
            );    
        });

    }
    return {
        tag: tag
    };
    
}

async function getImagesByTag(args){
    let idTag;
    if(args.idTag.$value == undefined){idTag = args.idTag;}
    else{idTag = args.idTag.$value;}

    let response = await requests_ms.getImagesByTag(idTag);

    let images = [];

    if(response.status == 200){    
        response.body.multimediaByTag.forEach(element => {
            images.push(element.url)
        });
    }
    return {
        images: images
    };

}

module.exports = {
    getAllTags,
    getImagesByTag
}