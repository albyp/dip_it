// revision

// > < == !=
let logic = 10 != 5;
let logic2 = 20 < 5;

// && ||
let logic3 = (logic || logic2);

// how do I write an if else
if(false) {
    console.log("This will never trigger");
} else if(true) {
    console.log("Always hits here");
} else {
    console.log("Never hits here");
};

// how do I write a for loop
for(let i = 0; i < 10; i++) {
    console.log("Hello", i);
};

// How do I create a basic function
function helloWorld() {
    console.log("Hello world!");
};
helloWorld()

// arrays
const fruits = ['watermelon', 'strawberry', 'orange'];
const fruit = fruits[0]; // watermelon

// arrow functions
// create an arrow function to add two numbers together
let addNums = (n1, n2) => n1 + n2;
console.log(addNums(10,5));

const calculateArea = (length, width) => {
    const area = length * width;
    return `The area is ${area} units`;
}

const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);