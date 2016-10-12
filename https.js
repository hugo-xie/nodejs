'use strict'
var https = require('https');
var fs = require('fs');

var options = {
  host:'github.com',
  method:'GET',
  path:'/'
};

var req = https.request(options,function(res){
  console.log(res.socket.authorized);
  console.log(res.socket.getPeerCertificate());
})