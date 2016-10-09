'use strict'
var request = require('request');
var inspect = require('util').inspect;

var body = {
  a :1,
  b:2
};
var options = {
  url:'http://localhost:4001/print/body',
  
  
  json:body
};
request(options,
  function(err,res,body){
    if (err) {
      throw err;
    }
    console.log(inspect({
      err:err,
      res:{
        statusCode: res.statusCode,
        headers:res.headers
      },
      body:JSON.parse(body)
    }))
  });