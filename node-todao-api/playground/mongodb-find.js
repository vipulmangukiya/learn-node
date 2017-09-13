
  const {MongoClient,ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err)  {
      return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Users').find({
      _id: new ObjectID('59b95524e91aea254803dfc8')
    }).toArray().then((docs) => {

      console.log(JSON.stringify(docs, undefined ,2));
    },(err) => {
        console.log('Unable to fetch Users', err);
    });

    db.collection('Users').find().count().then((count) => {
      console.log('Total Number OF  Users:',count);
    },(err)=> {
      console.log('Unable to fetch Users',err);
    })

    db.collection('Users').find({location:"Tana"}).toArray().then((docs) => {
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch User name', err);
    })

    db.close();
  });
