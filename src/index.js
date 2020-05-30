const soap = require(`soap`);
const fs = require('fs');

const restServer = require('./rest_server/index')
const dataServer = require('./server');

const soapServer = require(`./soap_server/index`);
const ss_2b = require('./soap_server/service');


restServer.listen(dataServer.rest_server_port, () => {
    console.log(`REST corriendo en http://localhost:${dataServer.rest_server_port} `)
})


var xml = fs.readFileSync(`./src/soap_server/ss_2b_test_service.wsdl`, 'utf8');
soapServer .listen(dataServer.soap_server_port, function(){
    soap.listen(soapServer , '/ss_2b', ss_2b, xml, function(){
      console.log('Soap corriendo en http://localhost:' + dataServer.soap_server_port);
    });
  });