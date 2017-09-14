
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)  {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b9e268818f59286031cbcf')
  }, {
    $set: {
      name:'Vipul Mangukiya',
      age: 18
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b9e268818f59286031cbcf')
  }, {
    $inc: {
      age: 1
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });


  db.close();
});
