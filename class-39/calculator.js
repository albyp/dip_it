const http = require('http');

// const { add, subtract, multiply, divide } = require('./math');
// instead of importing each function seperately, import as an object
const math = require('./math')

const server = http.createServer((request, response) => {
    response.statusCode = 200;
})

const port = 3000;

let operation = math.add;

let operator = '';

switch (operation.name) {
    case 'add':
        operator = '+';
        break;
    case 'subtract':
        operator = '-';
        break;
    case 'multiply':
        operator = '*';
        break;
    case 'divide':
        operator = '/';
        break;
}

let num1 = 15;
let num2 = 12;

let ans = operation(num1, num2);

server.listen(port, () => {
    console.log("Server is running on port:", port);
    console.log(`${num1} ${operator} ${num2} = ${ans}`);
})