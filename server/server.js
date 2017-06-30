var path = require('path');
var express = require('express');
var fs = require('fs');

var indexRoutes = require('./routes/index');

var app = express()

// VIEW ENGINE //
app.set('view engine', 'hrml');
app.engine('html', function(path, options, callbacks) {
	fs.readFile(path, 'utf-8', callbacks);
});

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../build')));

// ROUTERS //
app.use('/', indexRoutes);

// ERROR HANDLER //
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
})

// SERVER APP //
module.exports = app;