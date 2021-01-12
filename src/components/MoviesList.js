import React from "react";
import propTypes from "prop-types";
import MovieCard from "./MovieCard";

function MoviesList({ propsMovies }) {
    const emptyMessage = <p> There are no movies yet.</p>;
    const moviesList = (
        <div>
        {propsMovies.error.response ? (
            <h3>Error Data!</h3>
        ) : (
            propsMovies.movies.map((movie) => (
            <MovieCard key={movie.id} propsMovie={movie}/>
            ))
        )}
        </div>
    );
    console.log(propsMovies);
    return (
        <div>
        Movies List Comp
        {/* {movies.error}*/}
        {propsMovies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
}

MoviesList.propTypes = {
  propsMovies: propTypes.shape({
    movies: propTypes.array.isRequired,
  }).isRequired,
};
export default MoviesList;
