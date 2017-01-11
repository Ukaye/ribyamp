var express  = require('express');
var app      = express();
var passport = require('passport');
var port     = process.env.PORT || 80;



require('./config')(app);

// routes ======================================================================

require('./Auth')(passport);
require('./routes')(app,passport);
require('./Api')(app,passport);



// launch ======================================================================
app.listen(port);
console.log('listening on localhost:' + port);
