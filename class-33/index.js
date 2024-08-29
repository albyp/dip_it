// array
let fruits = ['apple', 'banana', 'pineapple', 'orange', 'grape'];

// for loop
for(let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    // output = apple banana pineapple orange grape
}

// while loop
let count = 0;
while (count < 5) {
    // console.log(count);
    count++;
}

// do while
let k = 0;
do {
    // console.log(k);
    k++;
} while(k < 5);


// task 1
// create a for loop that console logs the i 7 times
// create a while loop that console logs the k 8 times
// create a do while loop that console logs z 10 times
for (let i = 0; i < 7; i++) {
    console.log("i", i);
}

console.log("\n")

k = 0;
while (k < 8) {
    console.log("k", k);
    k++;
}

console.log("\n")

let z = 0;
do { 
    console.log("z", z);
    z++;
} while(z < 10);


// functions
function greet(name, list) {
    console.log("Hello", name + "!");
    list.push(name);
};

let people = ["Alby", "Sarah", "Mick", "Grant", "Owen"];
let members = [];

for (let i = 0; i < people.length; i++) {
    greet(people[i], members);
}
console.log(members.length);

function calculateArea(length, width) {
    let area = length * width;
    return area
};

myArea = calculateArea(5,2);
console.log("Area =", myArea)

// function expression
let multiply = function(a, b) {
    return a*b;
};

console.log(multiply(4, 6));

// task 2
// create a function that calculates the value of something. The volume is length x width x height
function volume(l, w, h) {
    return l*w*h;
};

dimensions = [5, 3, 2];
objectVolume = volume.apply(this, dimensions);
console.log(objectVolume);

function squares(number) {
    return number * number;
};

console.log(squares(6));

let square = (number) => number * number;
console.log(square(5));

// task 3
// try turning calculateVolume or calculateArea into an arrow function one liner
let calcVol = (l, w, h) => l * w * h;
console.log(calcVol(...dimensions));