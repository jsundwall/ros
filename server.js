var debug   = require('debug')('passport-mongo');
var app     = require('./app/app');
var config  = require('./app/config/cfg')

app.set('port', process.env.PORT || config.port);


var server = app.listen(app.get('port'), function() {
  console.log("Running on port " + config.port)
  debug('Express server listening on port ' + server.address().port);
});
