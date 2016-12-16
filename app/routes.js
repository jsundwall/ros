module.exports = function (app, passport) {

  // =======================
  // HOME PAGE - Login links
  // =======================
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the index file
  });

  // Process the login form
  app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/afterlogin',    // redirect to the secure profile section
		failureRedirect : '/login',         // redirect back to the signup page if there is an error
		failureFlash : true                 // allow flash messages
	}));

  // ======================
  // Signup ===============
  // ======================

  // process the signup form
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect : '/login',         // redirect to the secure profile section
    failureRedirect : '/register',      // redirect back to the signup page if there is an error
    failureFlash : true                 // allow flash messages
  }));

  // =====================
  // Logout ==============
  // =====================
  app.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/');
  });
};

// -- All routes afte this section requires login. Checked with isLoggedIn middleware
  //app.get('/afterlogin', isLoggedIn, function(req, res){
  //});




// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
