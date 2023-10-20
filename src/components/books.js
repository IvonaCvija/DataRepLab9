import BookItems from "./bookItems";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItems myBook={book}  key={book.isbn}></BookItems>
        }
    );
}
export default Books;