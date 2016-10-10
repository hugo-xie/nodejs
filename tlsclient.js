var fs =require('fs');

var options = {
  key:fs.readFileSync('client_key.pem'),
  cert:fs.readFileSync('client_cert.pem')
};

var tls = require('tls');
var host = 'localhost';
var port = 4001;

var client = tls.connect(port,host,options,function(){
  console.log('connected');
})