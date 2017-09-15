var mongoose = require('mongoose');

var Login = mongoose.model('Login',{
  username:{
    type:String,
    required: true,
    trim: true,
    minlength:1
  },
  email: {
    type: String,
    required: true,
    trim:true
  }
});

module.exports = { Login };
