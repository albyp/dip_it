// for loop

// array
let fruits = ['apple', 'banana', 'pineapple', 'orange', 'grape'];

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