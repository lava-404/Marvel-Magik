const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    requires: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
  },
  profile:{
    type: String,
    
  }
})

module.exports = mongoose.model("Users", UsersSchema)