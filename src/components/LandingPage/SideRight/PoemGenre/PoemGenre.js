import React, {useState} from "react";

import "./PoemGenre.css";

function PoemGenre() {
    let [genreDivSize, setGenreDivSize] = useState("minimized");
    let poemGenre = [
        "Family", "Love", "Friendship", "Science Fiction"
    ];

    function handleClick() {
        if(genreDivSize === "minimized") {
            setGenreDivSize("maximized");
            console.log(document.getElementById("poemGenreId").classList.remove("poemGenreContainer"));
            console.log(document.getElementById("poemGenreId").classList.add("poemGenreContainerBig"));
            return;
        }
        console.log(document.getElementById("poemGenreId").classList.remove("poemGenreContainerBig"));
        console.log(document.getElementById("poemGenreId").classList.add("poemGenreContainer"));
        
        setGenreDivSize("minimized");
    }

    return(
        <div className="PoemGenreSuperContainer">
        <div id="poemGenreId" className="poemGenreContainer">
            {
                poemGenre.map((genre,i) => {
                    return (
                        <div key={i} className="genreItem">
                            {genre}
                        </div>
                    );
                })
            }
        </div>

        {genreDivSize === "minimized" ? <label onClick={handleClick}>More Poems</label> : <label onClick={handleClick}>Few Poems</label>}
        </div>
    );
}

export default PoemGenre;