import { useState, useEffect } from "react";

function Movies() {

    let [movieinfo, setMovieinfo] = useState(null);
    let [movieTitle, setMovieTitle] = useState('the avengers');
    let url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=67429da2`;

    useEffect(() => {
        searchMovie(movieTitle);
    }, [])

    function readTitle(title) {
        setMovieTitle(title);
        console.log(title)
    }

    function searchMovie() {
        fetch(url)
            .then((response) => (response.json()))
            .then((movie) => {
                setMovieinfo(movie)
                console.log(movie)
            })
            .catch((err) => {
                console.log(err)
            });

    }

    return (
        <div className="container">
            <div className="search-box">
                <input type='text' name="search" className="search-input" onChange={(events) => { readTitle(events.target.value) }} />
                <button className="btn-submit" onClick={searchMovie}>Search Movie</button>
            </div>
            {
                movieinfo?.Error === undefined ? (

                    <div className="movie-container">


                        <div className="movie-image">
                            <img src={movieinfo?.Poster} />
                        </div>
                        <div className="movie-detail">
                            <p>
                                <strong>Title : </strong> {movieinfo?.Title}
                            </p>
                            <p>
                                <strong>Actors : </strong> {movieinfo?.Actors}
                            </p>
                            <p>
                                <strong>Awards : </strong> {movieinfo?.Awards}
                            </p>
                            <p>
                                <strong>Release Date : </strong> {movieinfo?.Relased}
                            </p>
                            <p>
                                <strong>Year : </strong> {movieinfo?.Year}
                            </p>
                            <p>
                                <strong>Writer : </strong> {movieinfo?.Writer}
                            </p>
                            <p>
                                <strong>Language : </strong> {movieinfo?.Language}
                            </p>
                            <p>
                                <strong>Type : </strong> {movieinfo?.Type}
                            </p>
                            <p>
                                <strong>IMDB Rating : </strong> {movieinfo?.imdbRating}
                            </p>
                            <p>
                                <strong>Genre : </strong> {movieinfo?.Genre}
                            </p>
                            <p>
                                <strong>Run Time : </strong> {movieinfo?.Runtime}
                            </p>
                        </div>

                    </div>
                ) : (
                    <h1>Data Not Found</h1>
                )
            }
        </div>
    );
}

export default Movies;