// const MongoClient = require('mongodb');

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)  {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //     text:'Vipul Mangukiya',
  //     completed: false
  // },(err,result) => {
  //   if(err) {
  //     return console.log('Unable to Insert Todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,1));
  // });

  db.collection('Users').insertOne({
      name:'Vipul',
      age:24,
      location:'Surat'
  },(err, result) => {
      if(err) {
        return console.log('Unable to Insert Users',err);
      }
      console.log(JSON.stringify(result.ops, undefined,2));
      console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();
});
