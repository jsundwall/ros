// Load the strategy
var LocalStrategy   = require('passport-local').Strategy;

// Load the user models
var User            = require('../app/models/user');

// expose and export to the app
module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // Used to serialie the user
  passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
       done(err, user);
     });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    // Overriding standard username and password fields
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {

    // Adding asynchronious proccess here
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {

      // Find a mail in the DB that is the same as submitted in the form
      // Checking that the user trying to login already exists
      User.findOne({ 'local.email' :  email }, function(err, user) {
        if (err)
          return done(err);

        // Check to see if there is already a user with that email
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

          // if there is no user with that email
          // create the user
          var newUser            = new User();

          // Set the users credentials locally
          newUser.local.email    = email;
          newUser.local.password = newUser.generateHash(password);

          // save the user
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }

      });

    });

  }));
  
};
