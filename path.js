'use strict'
var path = require('path');
var fs = require('fs');
// console.log(path.normalize("/foo/bsr//sfd/we/.."));
fs.stat('test.txt',function(err,stats){
  if (err) {throw err};
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isBlockDevice());
  console.log(stats.isCharacterDevice());
})

fs.open('test.txt','r+',function(err,fd){
  if (err) {throw err};
  function notifyError(err){
    fs.close(fd,function(){
      callback(err);
    });
  }
  var readBuffer = new Buffer(40),
     bufferofferset =0,
     bufferLength = readBuffer.length,
     filePosition = 0;
  var writeBuffer = new Buffer('this is me write');
  var writebufferLength = writeBuffer.length;
  fs.write(fd,writeBuffer,bufferofferset,writebufferLength,filePosition,function wrote(err,written){
       if (err) {throw err}
        console.log('wrote'+written+'bytes');
  });
 

   console.log(fd.toString());
})

fs.open('test.txt','r',function(err,fd){
  if (err) {throw err};
  var readBuffer = new Buffer(40),
     bufferofferset =0,
     bufferLength = readBuffer.length,
     filePosition = 0;
  var writeBuffer = new Buffer('this is me write');
  var writebufferLength = writeBuffer.length;
  
  fs.read(fd,readBuffer,bufferofferset,bufferLength,filePosition,function read(err,readBytes){
     if (err) {throw err};
     console.log('jsut read'+readBytes+'bytes');
     if (readBytes >0) {
      console.log(readBuffer.toString());
     }
  });

   console.log(fd.toString());
})
