'use strict'
// var net = require('net');
// var port = 4001;
// var conn = net.createConnection(port,connectionListener);

// function connectionListener(){
//   console.log('we have a new connection');
//   conn.write('hello server');
//   conn.on('data',function(data){
//     var newdata = data.toString();
//     console.log(newdata);
//   })
// }
var net = require('net');
var port = 4001;
var quitting = false;
var conn;
var retryTimeout = 3000;

var retriedTimes = 0;
var maxRetries = 10;

process.stdin.resume();

process.stdin.on('data',function(data){
  if (data.toString().trim().toLowerCase() === 'quit') {
    console.log('quitting....');
    conn.end();
    process.stdin.pause();
  }else{
    conn.write(data);
  }
});

(function connect(){
  function reconnect(){
    if (retriedTimes >= maxRetries) {
      throw new Error('max retries time have been exceeded, i give up');
    }
    retriedTimes +=1;
    setTimeout(reconnect, retryTimeout);
  }

  conn = net.createConnection(port);
  conn.on('connect',function(){
    retriedTimes =0;
    console.log('connected to the server');
    conn.write('hello server');
  });
  conn.on('error',function(err){
     console.log('connected failed,because of:'+err);
  })

  conn.on('close',function(){
    if (! quitting) {
      console.log('connection got closed,will try to reconnect');
      reconnect();
    }
  });

  conn.pipe(process.stdout,{end:false});
}());
