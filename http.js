'use strict'
var http = require('http');
var util = require('util');
var  fs = require('fs');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  // var rs = fs.createReadStream('1.mp4');
  res.write(req.method);
  res.write(util.inspect(req.headers));
  // rs.pipe(res);
  res.end();
}).listen(4000);