// Import necessary React hooks and libraries
import { useState } from "react";
import axios from "axios";

// Functional component for the "Create" page
function Create() {
    // Use the useState hook to manage state for title, authors, and cover
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [thumbnailUrl, setCover] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log the entered values to the console
        console.log("Title: " + title +
            " Cover: " + thumbnailUrl +
            " Authors: " + authors);

        // Create a book object with the entered values
        const book = {
            title: title,
            cover: thumbnailUrl,
            author: authors
        }

        / Make a POST request to the server to add the book
        axios.post('http://localhost:4000/api/book/', book)
            // Do something on successful request, if needed
            .then()
            // Handle errors, if any
            .catch();
    }

    // Render the component with a form for user input
    return (
        <div>
            <h2>Hello from create component!</h2>
            {/* Form for adding a new book */}
            <form onSubmit={handleSubmit}>
                {/* Input field for book title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* Input field for book authors */}
                <div className="form-group">
                    <label>Add Book Authors: </label>
                    <input type="text"
                        className="form-control"
                        value={authors}
                        onChange={(e) => { setAuthors(e.target.value) }}
                    />
                </div>
                {/* Input field for book cover */}
                <div className="form-group">
                    <label>Add Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={thumbnailUrl}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* Submit button for adding the book */}
                <div>
                    <input></input><input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}
// Export the Create component as the default export
export default Create;
