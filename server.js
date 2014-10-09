var http = require('http');
var fs = require('fs');

var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabet = alphabetString.split('');
var currentIndex = 0;

console.log("initializing");

function getNextAlphabet() {
	console.log("getNextAlphabet()");
	if (currentIndex >= alphabet.length) {
		currentIndex = 0;
	}
	var returnVal = alphabet[currentIndex];
	currentIndex++;
	return returnVal;
}


http.createServer(function(req, res) {

	console.log(req.url)

	var next = getNextAlphabet();

	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.write(next);
	res.end();
}).listen(8080);