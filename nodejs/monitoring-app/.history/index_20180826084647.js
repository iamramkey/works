/*
* Author: Iamramkey
* File: Main file for starting the monitoring ap

*/

//dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const notFoundURLString = 'n()tƒ0un$';

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

		// Choose the handler this request should go to.
		// If one is not found, Use the notfound handler
		var chosenHandler =
			typeof router[trimmedPath] === Function
				? router[trimmedPath]
				: handlers[notFoundURLString];
		// Construct the data object to send to the handler
		var data = {
			path,
			trimmedPath,
			queryStringObject,
			method,
			headers,
			payload: buffer
		};

		// Route the request to the handler specified in the router
		chosenHandler(data, function(statusCode, payload) {
			// Use the statuscode called back by the handler, or default to 200
			statusCode = typeof statusCode === 'number' ? statusCode : 200;

			// Use the payload called by the handler, or default to an empty object
			payload = typeof payload === 'object' ? payload : {};

			// Convert the payload to a string
			var payloadString = JSON.stringify(payload);

			// Return the response
			res.writeHead(statusCode);
			res.end(payloadString);

			//log the request path user is asking for
			console.log('Returning this response: '.statusCode, payloadString);
		});
	});
});

//start the server and have it listening on port 3000
server.listen(3000, function() {
	console.log(' server is started and listening on port 3000 :-)');
});

//Defind the request handlers
var handlers = {};
handlers.sample = function(data, callback) {
	// Callback a http status code, and a payload object
	callback(406, {
		name: 'sample handler response'
	});
};

//define a not found handler
handlers[notFoundURLString] = function(data, callback) {
	callback(404);
};

//Define a request router

var router = {
	sample: handlers.sample
};
