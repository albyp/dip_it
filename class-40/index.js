// import express module
const express = require('express');

// create an express application
const app = express();

// define the port number
const port = 3500;

const userRouter = requrie('./routes/users');
app.use('/users', userRouter);

// define route for root URL
app.get('/', (request, response) => {
    response.send('Hello Equinim Class');
});

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// route structure: app.METHOD(path, handler);
app.get('about', (request, response) => {
    response.send('This is the about page');
});

// const booksRouter = requrie('./routes/books');
// app.use('/books', booksRouter);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const loggerMiddleware = (request, response, next) => {
//     console.log(`${new Date().toISOString()} - ${request.method} ${request.url}`);
//     next();
// };

// app.use(loggerMiddleware);

// // app.use(express.static('public'));

// require('dotenv').config();
// // define the port number
// const port = process.env.PORT || 8080;

// // define route for root URL
// app.get('/', (request, reponse) => {
//     response.send(process.env.GREETING);
// });

// // start the server
// app.listen(port, () => {
//     console.log(process.env)
// });