'use strict'
var http = require('http');
var util = require('util');
var  fs = require('fs');
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   // var rs = fs.createReadStream('1.mp4');
//   res.write(req.method);
//   res.write(util.inspect(req.headers));
//   // rs.pipe(res);
//   res.end();
// }).listen(4000);
var options = {
  host:"www.baidu.com",
  port:80,
  path:"/index.html"
};

http.get(options,function(res){
  console.log('Got response:'+res.statusCode);
});