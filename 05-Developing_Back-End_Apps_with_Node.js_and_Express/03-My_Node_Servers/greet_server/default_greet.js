const http = require('http');
const current_time = require('./greet_time');

const requestListener = function (req, res) {
  res.writeHead(200);
  let timeRecived = current_time.getdefaultTime();
  let greeting = "It's still not morning yet ;)"
  if (timeRecived.getHours()>6 && timeRecived.getHours()<12) {
    greeting = "Good Morning :)"
  } else if (timeRecived.getHours()>=12 && timeRecived.getHours()<18) {
    greeting = "Good Afternoon :)"
  }else if (timeRecived.getHours()>=18 && timeRecived.getHours()<21) {
    greeting = "Good Evening :)"
  }else if (timeRecived.getHours()>=21 && timeRecived.getHours()<24) {
    greeting = "Good Night :)"
  }
  console.log(`Hello, ${greeting}`);
  console.log("The requested time is: " + current_time.getdefaultTime());
  res.end(`Hello, ${greeting}`);

}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);