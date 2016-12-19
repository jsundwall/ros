// App/app.js

// Load dependencies
var express         = require('express'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    expressSession  = require('express-session'),
    mongoose        = require('mongoose'),
    hash            = require('bcrypt-nodejs'),
    path            = require('path'),
    passport        = require('passport'),
    localStrategy   = require('passport-local' ).Strategy,
    config          = require('./config/cfg');

// Configure Mongoose
mongoose.connect(config.db);

// Load User model
var User = require('./models/user.js');

// create instance of express
var app = express();

// require the routes
var routes = require('./routes/api.js');

// =============================================================================
// Load the middleware
// Set the base path to ../public
// Start logging and start bodyParser
// Start an express Sesseion and hook passport on to that session.
// =============================================================================
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'secretsecretsecretsecret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// =============================================================================
// Configure passport
// Use a local strategy (own database)
// Make sure that user can be serialized and deserialized
// =============================================================================
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============================================================================
// Configure routes
// Catch '/' and send to index
// Catchall and send to index
// =============================================================================
app.use(routes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


// =============================================================================
// Handle Errors
// Configure 404
// Configure 500
// =============================================================================
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

// Export the variable App to use for server.js
module.exports = app;
