import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BookItems(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <CardBody>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.thumbnailUrl}></img>
                        <footer>
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}
export default BookItems;