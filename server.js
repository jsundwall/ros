var debug   = require('debug')('passport-mongo');
var app     = require('./app/app');
var config  = require('./app/config/cfg')

app.set('port', process.env.PORT || config.port);


var server = app.listen(app.get('port'), function() {
  console.log("Running on port " + config.port)
  // Next line is Node Debugger - Check docu on debugger if necessary  - only
  // turn on the debugger if there are any issues.

  debug('Express server listening on port ' + server.address().port);
});
