var mongoose = require('mongoose');

var Todo = mongoose.model('Users',{
    text: {
      type: String
    },
    completed: {
      type:Boolean
    },
    completedAt: {
      type:Number
    }
});


module.exports = {Todo};
