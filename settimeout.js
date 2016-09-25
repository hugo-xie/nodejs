'use strict'
var interval = 1000;

// (function schedule(){
//   setTimeout(function do_it(){
//     console.log('async is done');

//     schedule();
//   }, interval);
// }());

function foo(){
  console.log("foo");
};

process.nextTick(foo);
console.log("bar");