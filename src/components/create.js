import { useState } from "react";
import axios from "axios";

function Create() {

    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [thumbnailUrl, setCover] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Title: " + title +
            " Cover: " + thumbnailUrl +
            " Authors: " + authors);

        const book = {
            title: title,
            cover: thumbnailUrl,
            author: authors
        }

        //makes a http request and output to console browser
        axios.post('http://localhost:4000/api/book/', book)
            .then()
            .catch();
    }

    return (
        <div>
            <h2>Hello from create component!</h2>
            {/* form of type submit, invoke onSubmit when button is clicked */}
            <form onSubmit={handleSubmit}>
                {/* taking user input for title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* taking user input for authors */}
                <div className="form-group">
                    <label>Add Book Authors: </label>
                    <input type="text"
                        className="form-control"
                        value={authors}
                        onChange={(e) => { setAuthors(e.target.value) }}
                    />
                </div>
                {/* taking user input for cover */}
                <div className="form-group">
                    <label>Add Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={thumbnailUrl}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* submitting it somewhere */}
                <div>
                    <input></input><input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}
export default Create;