const http = require('http');

// load greet module
// const greet = require(.\greet);
const { greet, greet2 } = require('./greet'); // importing functions and destructing the module

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

const port = 3000;
server.listen(port, () => {
    console.log("Server is running on:", port);
    console.log(greet('Alby'));
    console.log(greet2('Alby'));
})