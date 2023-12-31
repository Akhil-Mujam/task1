const mongoose = require('mongoose')

const model = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})

const User = mongoose.model('User', model);

module.exports = User;