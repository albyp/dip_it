const http = require('http');

// using inputs
const readlineSync = require('readline-sync');

// const { add, subtract, multiply, divide } = require('./math');
// instead of importing each function seperately, import as an object
const math = require('./math')

const server = http.createServer((request, response) => {
    response.statusCode = 200;
})

const port = 3000;

// let operation = math.add;
// operation from input
const operationQuestion = readlineSync.question("What operation? (add/subtract/multiply/divide).");

let operation = null
let operator = '';

switch (operationQuestion) {
    case 'add':
        operator = '+';
        operation = math.add
        break;
    case 'subtract':
        operator = '-';
        operation = math.subtract
        break;
    case 'multiply':
        operator = '*';
        operation = math.multiply
        break;
    case 'divide':
        operator = '/';
        operation = math.divide
    break;
    default: // add a default
        console.log("Invalid choice.");
        break;
}

const num1 = parseInt(readlineSync.question("Enter your first number: "));
const num2 = parseInt(readlineSync.question("Enter your second number: "));

// let num1 = 15;
// let num2 = 12;

let ans = operation(num1, num2);

server.listen(port, () => {
    console.log("Server is running on port:", port);
    console.log(`${num1} ${operator} ${num2} = ${ans}`);
})