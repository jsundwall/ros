// app/models/user.js

// Load dependencies
var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt                = require('bcrypt-nodejs');
var Schema                = mongoose.Schema;


// Create Achievement Sub-Schema
var achievementSchema = new Schema({
  name          : String
});

// Create User schema
var User = new Schema({
  username      : String,
  password      : String,

  // Include Achievements Sub-Schema
  achievements  : [achievementSchema]
});

// Utilze the passport-local-mongoose dependency
User.plugin(passportLocalMongoose);

//
module.exports = mongoose.model('users', User);
