"use strict"

var tls = require('tls');
var fs = require('fs');

var serverOptions = {
  key:fs.readFileSync('my_key.pem'),
  cert:fs.readFileSync('my_cert.pem')
};

var server = tls.createServer(serverOptions);
var port = 4001;
server.listen(port);
console.log('服务器已成功启动');


function connectionListener(stream){
  stream.on('data',function(data){
    console.log('got some data from client:'+data);
    if (data.toString().trim().toLowerCase() === 'quit') {
      stream.end('bye bye client');
    };
  });
  stream.write('hey hello client');
  console.log('got a new connection');
}

server.on('secureConnection',connectionListener);