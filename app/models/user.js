// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// Define Achievements schema for the Achievements model
var achievementSchema = mongoose.Schema({
  name: String
})

// Define the schema for our user model
var userSchema = mongoose.Schema({
  local            : {
    email        : String,
    password     : String
  },
  achievements: [achievementSchema]
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
var User = mongoose.model('User', userSchema)
module.exports = User
