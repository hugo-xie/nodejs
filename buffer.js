'use strict'

var buf = new Buffer('my buffer content')


var buf2 = new Buffer(1024);
 
var smallerBuffer = buf.slice(8,12)

console.log(smallerBuffer.toString("base64"))

console.log(buf[10]);

console.log(buf2[100]);