// document
const mainTitle = document.getElementById('main-title');
const contentParagraphs = document.getElementsByClassName('content');
const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const toggleHighlightButton = document.getElementById('toggle-highlight-btn');
const dynamicContent = document.getElementById('dynamic-content');

// modifying content
mainTitle.textContent = "DOM Manipulation is fun!";

contentParagraphs[0].textContent = "Changed this paragraph using DOM.";

// modify styles
mainTitle.style.color = 'blue';
mainTitle.classList.add('highlight');

// add and remove elements
let li = document.createElement('li');
li.textContent = 'milk';
itemList.appendChild(li);

let fruits = ['Apple', 'Banana', 'Pear'];
let fruitList = document.createElement('ul');

fruits.forEach(fruit => {
    let li = document.createElement('li');
    li.textContent = fruit;
    fruitList.appendChild(li);
});

document.body.appendChild(fruitList);

// adding a table
const modules = {
    mod1: {
        title: 'Front-end',
        lecturer: 'Jonathon'
    },
    mod2: {
        title: 'Back-end',
        lecturer: 'Dom'
    }
}

const createTable = (data) => {
    let table = document.createElement('table');
    let headerRow = `<tr><th>Module</th><th>Lecturer</th></tr>`;
    table.innerHTML = headerRow;

    Object.values(data).forEach(({ title, lecturer }) => {
        let row = `<tr><td>${title}</td><td>${lecturer}</td></tr>`;
        table.innerHTML += row;
    });

    return table;
};

document.body.appendChild(createTable(modules));

let style = document.createElement('style');
style.textContent = `
    th, td {
        border: 1px solid black;
    }
    `;
document.head.appendChild(style);

// create a new button element with text content of "Click me" and add it to the body
let button = document.createElement('button');
button.textContent = "Click me";
button.addEventListener('click', function() {
    alert("You clicked this button");
});

document.body.appendChild(button);

addItemBtn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = "random";
    itemList.appendChild(li);
});

// remove item button
removeItemBtn.addEventListener('click', function() {
    itemList.removeChild(itemList.lastElementChild);
});

// toggle highlight
toggleHighlightButton.addEventListener('click', function() {
    mainTitle.classList.toggle('highlight');
});