import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    const [data, setData] = useState([]);

    useEffect(
        () => {

            // for (let i = 0; i < 1000000000; i++){}

                //async operation
                axios.get('http://localhost:4000/api/books')
                    .then(
                        //callback function, get data(all data from the body), but here just from books
                        (response) => {
                            setData(response.data.myBooks)
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