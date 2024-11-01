const express = require('express');
const app = express();
app.use(express.json());

const port = 3500;

app.get('/', (req, res) => {
    res.send("Hello");
});

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET specific books
app.get('books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    res.json(book);
});

// POST a new book
app.post('books', (req, res) => {
    const book = {
        id: books.length +1,
        title: "Harry Potter",
        author: "JK Rowling"
    };
    books.push(book);
    res.status(201).json(book);
});

const bookRoutes = require('./routes/bookRoutes');
app.use('api/v1/books', bookRoutes);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});