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
  host:"127.0.0.1",
  port:4001,
  url:'/print/body',
  mothod:"POST"
};

// http.get(options,function(res){
//   console.log('Got response:'+res.statusCode);
// });
var request = http.request(options, function(response){
     console.log('status:'+response.statusCode);
     console.log('HEADERS:'+response.headers);
     response.on('data',function(data){
      console.log('get:'+data.toString());
     });
});

request.write('this is a piece of data .\n');
request.write('this is another piece of data.\n');
request.end();