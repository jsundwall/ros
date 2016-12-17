var debug = require('debug')('passport-mongo');
var app = require('./app/app');

app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), function() {
  console.log("Running on port 3000")
  debug('Express server listening on port ' + server.address().port);
});
