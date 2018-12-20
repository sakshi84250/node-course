const express = require('express');
const hbs = require('hbs');
var app= express();
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));
app.get('/', (req,res)=>
{
  // res.send('<h1> Hello Express </h1>');
  res.send({name: 'shakshi' ,
  likes:[ 'dance', 'singing']
});
});

app.get('/about',(req,res) => {

  res.render('About Page');
});

app.get('/bad',(req,res) => {

res.send({errorMessage:'unable to handle request'})
});

app.listen(3000, () => {
  console.log('server is on port 3000');
});
