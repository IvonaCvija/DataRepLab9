import BookItems from "./bookItems";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItems myBook={book}  key={BookItems.isbn}></BookItems>
        }
    );
}
export default Books;