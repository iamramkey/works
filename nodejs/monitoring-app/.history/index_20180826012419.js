/*
* Author: Iamramkey
* File: Main file for starting the monitoring ap

*/

//dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

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

	//get the query string as an object
	var queryStringObject = parsedURL.query;

	//get the HTTP method
	var method = req.method.toLowerCase();

	//get the headers as an object
	var headers = req.headers;

	//get the payload (if any)
	//todo: need to make it a confgurable default charset to the entire application
	var decoder = new StringDecoder('utf-8');

	//we are calling the payload as buffer because payload will stream and load into the buffer once the stream is ended then the final output which is decoded from a buffer to a string/any mime time is called as request payload
	var buffer = '';

	//data event is not going to be executed if didnt send any payload information with request (so, this method may or may not be called for each and every request)

	//doc: Stremas are built into node.js server and they are being used in multiple places. This is a demonstration of reading a stream data & using it to give the required response to the user

	req.on('data', function(data) {
		buffer += decoder.write(data);
	});

	//end event will be called on each and every request if user dont send any request payload
	req.on('end', function() {
		buffer += decoder.end();

		//here the request data stream is reached the server and completed
		//we need to send the response back to the user using response object & print out the incoming request information

		//send the response
		res.end('Hello World /n');

		//log the request path user is asking for
		console.log(
			'Request recieved for path : ',
			trimmedPath,
			' using method : ',
			method,
			' with query parameters ',
			queryStringObject,
			' with headers ',
			headers,
			' with payload : ',
			buffer
		);
	});
});

//start the server and have it listening on port 3000
server.listen(3000, function() {
	console.log(' server is started and listening on port 3000 :-)');
});
