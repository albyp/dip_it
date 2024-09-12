// synchronus code (sync)
// console.log('First');
// console.log('Second');
// console.log('Third');

// asynchronus code (async)
// console.log('First');
// setTimeout(() => {
//     console.log('Second');
// }, 1000);
// console.log('Third');

// create a function called loading and once loaded, use a callback to print loaded
// function loading(callback) {
//     console.log('Loading...');
//     callback();
// }

// function loaded() {
//     console.log('Loaded');
// }

// loading(loaded);

// function fetchData(callback) {
//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             callback(null, 'Data fetched successfully');
//         } else {
//             callback(new Error('Failed to fetch data'));
//         }
//     }, 1000);
// }

// fetchData((error, data) => {
//     if(error) {
//         console.error('Error ', error.message);
//     } else {
//         console.log(data);
//     }
// });

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random > 0.5) {
            resolve('Success!');
        } else {
            reject('Failure');
        }
    }, 1000);
});

myPromise.then(result => console.log(result)).catch(error => console.error(error));

// convert the previous fetchData to a promise
const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random()
        if(num > 0.5) {
            resolve(`Data fetched successfully :${num.toPrecision(2)}`);
        } else {
            reject('Failed to load data');
        }
    }, 1000);
});

fetchPromise.then(result => console.log(result)).catch(error => console.error(error));


function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: 'Alby' }), 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(['Post 1', 'Post 2', 'Post 3']), 1000);
    });
}

fetchUser().then(user => fetchUserPosts(user.id)).then(posts => console.log(posts)).catch(error => console.log(error));

// async and await
async function fetchData() {
    return 'Data';
}

console.log(fetchData());

/*
Promise1 and Promise2 turn into functions doesn't have to be async but return promise. 
Create a fetchPromises async to await and print out all promises values (one and two)
*/
function prom1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('one'), 1000);
    });
}

function prom2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('two'), 1000);
    });
}

async function fetchPromises(promiseOne, promiseTwo) {
    const resultOne = await promiseOne();
    const resultTwo = await promiseTwo();
    console.log(resultOne, resultTwo);
}

fetchPromises(prom1, prom2);