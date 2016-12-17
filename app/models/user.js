// user model
var mongoose              = require('mongoose');
var Schema                = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt                = require('bcrypt-nodejs');

var achievementSchema = new Schema({
  name          : String
});

var User = new Schema({
  username      : String,
  password      : String,
  achievements  : [achievementSchema]
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);
