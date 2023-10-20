import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            //async operation
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    //callback function, get data(all data from the body), but here just from books
                    (response) => {
                        setData(response.data.books)
                    }
                )
                //error message
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );
    return (
        <div>
            <h2>Hello from read component!</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}
export default Read;