'use strict'
var fs = require('fs');
var readStream = fs.createReadStream('test.txt', {end:2});
readStream.on('data',function(data){
   console.log("what i get:"+data);
})
var buffer = new Buffer('this is a new writestream');
var writeStream = fs.WriteStream('stream.txt', {encoding: 'utf8'});
console.log(writeStream.write(buffer));
