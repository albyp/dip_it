const fruits = ['apple', 'banana', 'orange', 'watermelon', 'mango', 'passionfruit'];

// forEach()
fruits.forEach((fruit, index) => {
    console.log("Fruit: ", fruit, index);
});

const inSeasonFruits = [];
const season = "Summer";
const summerFruits = ['apple', 'orange'];

fruits.forEach((fruit, season) => {
    if (season == 'Summer') {
        if (fruit in summerFruits) {
            inSeasonFruits + fruit
        };
    }
});

console.log(inSeasonFruits);

// map()
const numbers = [1,2,3,4,5];
const numbers2 = numbers.map((number) => number * 2);

console.log(numbers);
console.log(numbers2);

const people = [
    {name: 'Steve', age: 80},
    {name: 'Samantha', age: 60},
    {name: 'Bob', age: 30},
    {name: 'Julie'},
    {name: 'Sarah', age: 45}
];

const names = people.map(person => person.name);
const ages = people.map(person => person.age);
console.log(names,ages);

// filter()

const evenNumbers = numbers.filter(number => number %2 == 0);
console.log(evenNumbers);

const over30 = people.filter(person => person.age > 30);
console.log(over30);

// == & ===
const string = '10';
const num = 10;

// notice the difference because of the data type conversion
console.log(string === num);
console.log(string == num);

const namesofPeopleOver30 = people.filter(person => person.age > 30).map(person => person.name);
console.log(namesofPeopleOver30);

// reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const max = numbers.reduce((max, num) => Math.max(max, num));
console.log(max);

const averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log(averageAge);

// push() to add elements to end of array
const veg = ['celery', 'potato', 'avocado', 'lettuce'];
veg.push('pumpkin', 'cabbage');
console.log(veg);

// unshift() add elements to front of array
veg.unshift('corn', 'beetroot');

console.log(veg);

// adding by array index
veg[10] = 'carrot'

// pop() will remove the last element from an array
let lastVeg = veg.pop();
console.log(lastVeg);

console.log(veg);

// shift() removes the first element from an array
let firstVeg = veg.shift();
console.log(firstVeg);

console.log(veg);

// splice() remove any itme from an array based on index (start index, number of elements)
let removeVeg = veg.splice(1, 2);
console.log(removeVeg);

console.log(veg);