/*
* Author: Iamramkey
* File: Main file for starting the monitoring ap

*/

//dependencies
const http = require('http');
const url = require('url');

//the server could respond to all your requests with a string
var server = http.createServer(function(req, res) {
	console.log(`new request came to the server`);
	//get the url and parse it
	var parsedURL = url.parse(req.url, true);

	//get the path out of url
	var path = parsedURL.pathname;
	console.log(`original path request for is : ${path}`);
	/*
	* we are replacing extra slashes in the url using the below regex
	* by using this we are getting the correct path which user is exactly requesting for
	* REGEX pattern
	*/
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');

	//get the HTTP method
	var method = req.method.toLowerCase();

	//send the response
	res.end('Hello World /n');

	//log the request path user is asking for
	console.log(
		`Request received on this path : ${path} using method : ${method}`
	);
});

//start the server and have it listening on port 3000
server.listen(3000, function() {
	console.log(' server is started and listening on port 3000 :-)');
});
