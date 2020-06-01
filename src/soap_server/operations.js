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
    
    console.log(args);
    
    let idTag = args;

    let response = await requests_ms.getImagesByTag(idTag);

    let url = [];

    if(response.status == 200){    
        response.body.multimediaByTag.forEach(element => {
            url.push(element.url)
        });
    }
    return {url: url};

}

module.exports = {
    getAllTags,
    getImagesByTag
}