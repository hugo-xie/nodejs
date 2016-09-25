'use strict'
var net = require('net');
var fs = require('fs');
var port = 4001;

var server = net.createServer();

server.on('listening',function(){
  console.log('Server is listening on port',port);
});


var sockets = [];
var writeStream1 = fs.createWriteStream('socket1.txt');
      var writeStream2 = fs.createWriteStream('socket2.txt');
      var readstraem1 = fs.createReadStream('socket1.txt');
      var readstream2 = fs.createReadStream('socket2.txt');
server.on('connection',function(socket){
      console.log('server has a new connection');
      socket.write('hello!you can start typing. Type "qiut" to exit.\n');
      sockets.push(socket);
      process.stdin.on('data',function(data){
  socket.write(data);
});
      socket.on('data',function(data){
        console.log('got:'+data.toString());
        if (data.toString().trim().toLowerCase() === 'quit') {
          socket.write('bye bye!');
          return socket.end();
        }
        socket.write(data);
      });
      // sockets[0].pipe(writeStream1);
      // sockets[1].pipe(writeStream2);
     socket.on('data',function(data){
      // sockets[0].pipe(writeStream2);
      
      console.log(data.toString());
      // sockets[1].write(readstream2);
      }); 
    
     
});


      


// server.on('close',function(){
//   console.log('server is now closed');
// })

// server.on('error',function(err){
//     console.log('Error occurred:',err.message);
// })

server.listen(port);