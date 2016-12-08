module.exports = function (app, passport) {

  // =======================
  // HOME PAGE - Login links
  // =======================
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the index file
  });

  app.get('/login', function(req, res) {

    // render the page and pass any flash messages
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // Process the login form
  // app.post('login', do all the passport stuff here);

  // ======================
  // Signup ===============
  // ======================
  // Show the signup form
  app.get('/signup', function(req, res){

    // Render the page and pass any flash messages
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // ======================
  // Profile section ======
  // ======================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', {
      user : req.user // Pass the user from request to the template
    });
  });

  // =====================
  // Logout ==============
  // =====================
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
