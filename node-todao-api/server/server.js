var express    =  require('express');
var bodyPasrser=  require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo}     = require('./models/Todo');
var {Login}    = require('./models/Login');

var app = express();

app.use(bodyPasrser.json());

app.post('/todos',(req,res) => {
  //console.log(req.body);
  // var todo = new Todo({
  //   text:req.body.text
  // });
  //
  // todo.save().then((doc)=> {
  //   res.send(doc);
  // },(e)=>{
  //   res.status(400).send(e);
  // });

  var login = new Login({
    username:req.body.username,
    email:req.body.email
  });

  login.save().then((doc)=>{
      res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });


});


app.listen(3000, () => {
  console.log('Started on port 3000');
});
