/*
* Author: Iamramkey
* File: Main file for starting the monitoring ap

*/

//dependencies
const http = require('http');

//the server could respond to all your requests with a string
var server = http.createServer(function(req, res) {
	//get the url and parse it

	//get the path out of url

	//send the response
	res.end('Hello World /n');

	//log the request path user is asking for
});

//start the server and have it listening on port 3000
server.listen(3000, function() {
	console.log(' server is started and listening on port 3000 :-)');
});
