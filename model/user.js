const mongoose = require('mongoose');
const User = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
},
  {
        collection:'User'
    });
module.exports= mongoose.model('User',User);

