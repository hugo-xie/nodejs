'use strict'

var http = require('http');
var util = require('util');
var fs = require('fs');

http.createServer(function(req,res){
    function printBack(){
      res.writeHead(200,{'Content-type':'text/plain'});
      res.end(JSON.stringify({
        url:req.url,
        method:req.method,
        headers:req.headers
      }));
    }
    switch(req.url){
      case'/redirect':
         res.writeHead(301,{'Location':'/'});
         res.end();
         console.log("301");
         break;

      case'/print/body':
        var body ='';
        req.on('data',function(data){
          body +=data;
          console.log(body);
        });
        req.on('end',function(){
          res.end(JSON.stringify(body));
        });
        break;
        default:
        printBack();
        break;
    }
}).listen(4001);
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.write(req.method);
//   res.write(util.inspect(req.headers));
//    req.on('data',function(data){
//       console.log('get:'+data.toString());
//    });
//   res.end();
// }).listen(4000);
console.log('服务器已经启动');