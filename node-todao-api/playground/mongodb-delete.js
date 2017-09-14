
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)  {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // deleteMany name "Vipul"
  db.collection('Users').deleteMany({name:"Vipul"}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  },(err) => {
      console.log("Unable to find Document");
  });

  // Delete One
  db.collection('Users').deleteOne({name:'Vipul'}).then((result) => {
    console.log(result);
  },(err) => {
      console.log('Unable to find Document');
  });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({name:'Vipul'}).then((result) => {
      console.log(result);
  },(err) => {
      console.log('Unable to find Document');
  });

  // deleteMany
  db.collection('Users').deleteMany({name:'Vipul'}).then((result) =>{
    console.log(result);
  }, (err) => {
      console.log('Unable to find Document');
  });

// deleteOne with _id
  db.collection('Users').findOneAndDelete({_id: new ObjectID("59b955b19aac0f1824352747")}).then((result) =>{
    console.log(result);
  },(err) => {
    console.log('Unable to find Document');
  });


  db.close();
});
