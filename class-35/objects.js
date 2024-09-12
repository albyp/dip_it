let person = {
    name: "Don",
    age: 10,
    canVote: false,
    address: {
        street: "123 Street",
        city: "Perth"
    },
    greet: function() {
        console.log("Hello my name is ", this.name);
    }
}

person.greet();

// Keys
console.log(Object.keys(person.address));

// Values
console.log(Object.values(person));

// Entries
console.log(Object.entries(person));

// console.log(person);