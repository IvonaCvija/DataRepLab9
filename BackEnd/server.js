// Import required modules
const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(function (req, res, next) {
    // Set CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use bodyParser middleware to parse request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');

// Define async function to connect to MongoDB
async function main() {
    // Connect to the MongoDB Atlas cluster
    await mongoose.connect('mongodb+srv://user:user2023@cluster0.1kojhqr.mongodb.net/?retryWrites=true&w=majority');
    // Use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled, 
}
// Call the main function to connect to MongoDB
main().catch(err => console.log(err));

// Define the book schema using Mongoose
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
})

// Create a Mongoose model based on the book schema
const bookModel = mongoose.model(`books`, bookSchema)

// Handle DELETE request to delete a book by ID
app.delete('/api/book/:id', async (req, res) => {
    console.log("Delete: " + req.params.id)

    // Find and delete the book by ID
    let book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);
})

// Handle PUT request to update a book by ID
app.put('/api/book/:id', async (req, res) => {

    console.log("Update: " + req.params.id);

    // Find and update the book by ID with the request body
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(book);
})

// Handle POST request to create a new book
app.post('/api/book', (req, res) => {
    console.log(req.body);
    // Create a new book using the request body
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
        // res.send("Data Received!");
        .then(() => { res.send("Book created") })
        .catch(() => { res.send("Book not created") })
})

// Handle GET request for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Handle GET request to retrieve a book by ID
app.get(`/api/book/:id`, async (req, res) => {
    console.log(req.params.id);

    // Find a book by ID
    let book = await bookModel.findById({ _id: req.params.id })
    res.send(book);
})

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Handle GET request to retrieve all books
app.get('/api/books', async (req, res) => {
    // Find all books in the database
    let books = await bookModel.find({});
    res.json(books);
})
