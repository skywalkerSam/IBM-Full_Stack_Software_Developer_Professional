// Time Server (America/New_York)
const http = require('http');
const current_time = require('./time');

const requestListener = function (req, res) {
  res.writeHead(200);
  console.log("Success");
  console.log("The requested time is: " + current_time.getdefaultTime("America/New_York"));
  res.end("The requested time is: " + current_time.getdefaultTime("America/New_York"));
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(8080);


// Make a request:  curl localhost:8080
