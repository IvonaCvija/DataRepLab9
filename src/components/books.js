// Import the BookItems component
import BookItems from "./bookItems";

// Functional component to render a list of books
function Books(props) {

    // Map through the array of books and render a BookItems component for each book
    return props.myBooks.map(
        (book) => {
            // Pass the individual book data and key to the BookItems component
            return <BookItems myBook={book} key={book._id} reload={() => { props.Reload(); }}></BookItems>
        }
    );
}
// Export the Books component as the default export
export default Books;
