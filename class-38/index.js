// JSON -> Javascript Object Notation
// Fetch
// weather.com
// api.weather.com/getweather/perth/wa -> {"weather": "24"}

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.example.com/data', true);
// xhr.onload = function() {
//     if(xhr.status === 200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// };
// xhr.send();

// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// Response -> status, OK
fetch('https://cat-fact.herokuapp.comfacts')
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

// Find a fact API and call it
fetch('https://v2.jokeapi.dev/joke/Programming,Dark')
    .then(response => {
        if(!response.ok) {
            throw new Error('Unable to get response');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('Fetch error:', error));

// example of creating a post request
fetch('https://submit_todo.com/api/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Grab eggs', completed: false})
})
.then(response => response.json())
.then(data => console.log('Success', data))
.catch(error => console.error(error));

// create a post request to post some favourite foods
let favFoods = [
    'Parmi',
    'Steak sandwich',
    'Pasta',
    'Pizza'
]; // Favourite foods array

function postFavFoods(foods) {
    foods.forEach(food => {
        fetch('https://my-recipes.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ foodName: food}) // send each food as an object
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit food');
            }
            return response.json();
        })
        .then(data => console.log(`Success: ${data.foodName} added.`))
        .catch(error => console.error('Error:', error));
    });
}

postFavFoods(favFoods);

// create a get request using fetch for a favourite food
fetch('https://my-recipes.com/api/get-favourites')
    .then(response => response.json())
    .then(data => console.log('Favourite foods:', data))
    .catch(error => console.error('Fetch error:', error));