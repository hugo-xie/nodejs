'use strict'

var child_process = require('child_process');

var exec = child_process.exec;
exec('cat *.js | wc -l',function(err,stout,stderr){
        if (err) {
          console.log('child process exited with error code',err.code);
          return;
        }
        console.log(stout);
});
var spawn = child_process.spawn;
var child = spawn('tail',['-f','te3st.txt']);
child.stdout.on('data',function(data){
  console.log('tail output:'+data);
})

child.stderr.on('data',function(data){
     console.log('tail error output:',data.toString());
})

process.stdin.resume();
process.stdin.on('data',function(data){
   var number;
   try{
    number = parseInt(data.toString(),10);
    number +=1;

    process.stdout.write(number+"\n");
   }catch(err){
    process.stderr.write(err.message+"\n");
   }
});