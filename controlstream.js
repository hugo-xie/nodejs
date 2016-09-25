'use strict'
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
  var rs = fs.createReadStream('/Users/xy86/Desktop/terminal_parameter.sql', {start:0,end:10});

  // rs.on('data',function(data){
  //     if (!res.write(data)) {
  //       rs.pause();
  //     }
  // });

  // res.on('drain',function(){
  //   rs.resume();
  // });

  // rs.on('end',function(){
  //   res.end();
  // });

  rs.pipe(res,{end:false});
  rs.on('end',function(){
    res.write('\n'+'that is all guys');
    res.end();
  })


}).listen(2000);