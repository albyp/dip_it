// [[Prototype]] -> null OR ref object

let rabbit = {
    jumps: true
};

let animal = {
    eats: true
};

let bird = {
    fly: true
};

let seagull = {
    pest: true
};

seagull.__proto__ = bird;

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(seagull.fly);

// 'new' keyword and constructors
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function() {
//     console.log('Hello')
// };

// let cat = new Animal('Mittens');

// console.log(cat.name);
// cat.makeSound();

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log("Hello, I'm", this.name);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof");
    }
}

let dog = new Dog("Rex");
dog.sayName();
dog.bark();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introducePerson() {
        console.log("Hello, I'm", this.name);
    }

    sayAge() {
        console.log("I'm", this.age, "years old.");
    }
}

class Aussie extends Person {
    introducePerson() {
        console.log("How ya garn, I'm", this.name);
    }
}

let bogan = new Aussie("Robbo", 32);
bogan.introducePerson();
bogan.sayAge();

let numbers = [1,2,3,4,5];

let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(doubled);
console.log(evens);
console.log(sum);

// some()
let hasEven = numbers.some(num => num % 2 === 0);

// every()
let allPositive = numbers.every(num => num > 0);

// find()
let firstEven = numbers.find(num => num %2 === 0);

// findIndex()
let indexOfThree = numbers.findIndex(num => num === 3);

let products = [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Xbox", price: 500 },
    { id: 3, name: "TV", price: 3000 }

]

let expensiveStock = products.filter(product => product.price > 500).map(product => product.name);
let firstLessThan = products.find(product => product.price <= 500).name;
console.log(expensiveStock);
console.log(firstLessThan);