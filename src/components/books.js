import BookItems from "./bookItems";

function Books(props) {

    return props.myBooks.map(
        (book) => {
            return <BookItems myBook={book} key={book._id} reload={() => { props.Reload(); }}></BookItems>
        }
    );
}
export default Books;