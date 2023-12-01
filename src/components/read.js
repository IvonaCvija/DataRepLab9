// Import necessary React hooks and components
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

// Functional component for the "Read" page
function Read() {
    // Use the useState hook to manage the state of the data
    const [data, setData] = useState([]);

    // Use the useEffect hook to fetch data when the component mounts
    useEffect(
        () => {
            // Make a GET request to the server to fetch books data
            axios.get('http://localhost:4000/api/books')
                .then(
                    // Callback function to handle successful response
                    (response) => {
                        // Update the state with the fetched data
                        setData(response.data)
                    }
                )
                //error message
                .catch(
                    // Error handling for failed requests
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );// The empty dependency array ensures that the effect runs only once on mount

    // Function to reload data by making another GET request
    const ReloadData = (e) => {
        axios.get('http://localhost:4000/api/books')
            .then(
                // Callback function to handle successful response
                (response) => {
                    // Update the state with the re-fetched data
                    setData(response.data)
                }
            )
            .catch(
                // Error handling for failed requests
                (error) => {
                    console.log(error);
                }
            );
    }
    // Render the component with the fetched data and reload function
    return (
        <div>
            <h2>Hello from read component!</h2>
            {/* Render the Books component, passing the fetched data and reload function as props */}
            <Books myBooks={data} Reload={ReloadData}></Books>
        </div>
    );
}
// Export the Read component as the default export
export default Read;
