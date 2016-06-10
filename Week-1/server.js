var express = require('express');
var dishRouter = require('./dishRouter');	
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;
var app = express();	// Create an app
app.use(morgan('dev'));	// Add log feature to the server
app.use('/dishes',dishRouter); // If the URL contains the /dishes, then apply dishRouter
app.use(express.static(__dirname + '/public'));	// use express.static middleware 
// and use the public folder under current folder as the one which contains the static files

app.listen(port, hostname, function() {
	console.log('Server runing at http://' + hostname + ':' + port + '/');
});