// Class for books
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
    }

    checkOut() {
        if(this.isCheckedOut) {
            throw new Error("Book is already checked out");
        }
        this.isCheckedOut = true;
    }

    returnBook() {
        this.isCheckedOut = false;
    }
}
// Class for library
// addBook, findBookByISBN, checkoutBook, getAllBooks, getTotal
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBookByISBN(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    checkoutBook(isbn) {
        const book = this.findBookByISBN(isbn);
        try {
            if (book) {
                book.checkOut();
                console.log("Checked out:", book.title);
            }
        } catch(error) {
            console.log("Error has occured:", error.message)
        }
    }

    getAllBooks() {
        return this.books;
    }

    getAvailableBooks() {
        let availableBooks = books.filter(book => book.isCheckedOut !== true).title
    }

    getTotalBooks() {
        return this.books.length;
    }
}

// Create a new library, add some new books, get some books, check out books
const myLibrary = new Library();
myLibrary.addBook(new Book("Harry Potter", "J.K. Rowling", "112"));
myLibrary.addBook(new Book("Atomic Habits", "James Clear", "223"));
myLibrary.addBook(new Book("The Hobbit", "J.R.R Tolkien", "334"));

myLibrary.checkoutBook("334");

console.log("All books:", myLibrary.getAllBooks());

console.log("Total books:", myLibrary.getTotalBooks());

console.log("Available books:", myLibrary.getAvailableBooks());