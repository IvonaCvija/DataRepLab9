import BookItems from "./bookItems";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItems myBook={book}  key={book._id}></BookItems>
        }
    );
}
export default Books;