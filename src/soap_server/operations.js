function getAllTags(args) {
    
    //Diferentes mapeos de datos
    let name;
    if(args.name.$value == undefined){name = args.name;}
    else{name = args.name.$value;}

    let a = "hola";
    return a;
}

module.exports = {
    getAllTags
}