// Import necessary components and libraries
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Functional component to render book items
function BookItems(props) {

    return (
        <div>
            {/* Display a Bootstrap Card for each book */}
            <Card>
                {/* Display the book title in the card header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <CardBody>
                    <blockquote className="blockquote mb-0">
                        {/* Display the book cover image */}
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {/* Display the book author in the footer */}
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </CardBody>
                {/* Add button to navigate to the Edit page */}
                <Link to={'/edit/' + props.myBook._id} className='btn btn-primary'>Edit</Link>
                {/* Add button to delete the book */}
                <Button variant='danger' onClick={
                    (e) => {
                        // Make a DELETE request to the server to delete the book
                        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                            .then((res) => {
                                // Trigger a reload of books after successful deletion
                                let reload = props.reload();
                            })
                            .catch();
                    }
                }>Delete</Button>
            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}
// Export the BookItems component as the default export
export default BookItems;
