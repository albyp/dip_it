const express = require('express');
const router = express.Router();

// TODO: Implement book routes here
let books = [
    { id: 1, title: 'Twilight', author: 'Stephanie Myer' },
    { id: 2, title: '1984', author: 'George Orwell' },
];

// /books/
router.get('/', (req, res) => {
    res.json(books);
});

// filter books
router.get('/', (req, res) => {
    let result = books;
    // Filter
    if(req.query.author) {
        result = result.filter(book => book.author.toLocaleLowerCase().includes(req.query.author.toLocaleLowerCase()));
    }

    // sorting
    if(req.query.sort === 'title') {
        result.sort((a, b) => {
            a.title.toLocaleLowerCase(b.title);
        })
    }

    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    req.json(result.slice(startIndex, endIndex));

    // /books?author=orwell&sort=title
});

// search functionality
router.get('/search', (req, res) => {
    const searchTerm = req.query.q.toLowerCase();
    const results = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    res.json(results);
});

router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
});

// implement the REST
module.exports = router;