var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);

function getWeatherData(){
  return {
    locations:[
      {
        name:'portland',
        forcastUrl:'http://www.wunderground.com/US/OR/Portland.html',
        iconUrl:'http://icon-ak.wxug.com/i/c/k/cloudy.gif',
        weather:'Overcast',
        temp:'54.1 F (12.3 C)'
      }
    ]
  }
};
app.use(function(req,res,next){
  if (!res.locals.particals) res.locals.particals={};
  res.locals.particals.weather = getWeatherData();
  next()
});
app.get('/',function(req,res){

  // res.type('text/plain');
  // res.send('meadowlark travel');
  res.render('home');
});

app.get('/about/:id',function(req,res){
  // res.type('text/plain');
  // res.send('about meadowlark travel');
  console.log(req.params);
  console.log(req.ip);
  res.render('about');
});

app.get('/headers',function(req,res){
  res.type('text/plain');
  var s = '';
  for(var name in req.headers){
    s += name + ':' + req.headers[name]+'\n';
  }
  res.send(s);
})


app.use(function(req,res){
  // res.type('text/plain');
  // res.status(404);
  // res.send('404-not found');
  res.status(404);
  res.render('404');
});

app.use(function(req,res){
  // res.type('text/plain');
  res.status(500);
  res.render('500');
});

app.listen(3000,function(){
  console.log('the server is listening at:'+'3000'+';press Ctrl+c to terminate');
})
