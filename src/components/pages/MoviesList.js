import React, { Component } from 'react';
import propTypes from 'prop-types';


class MoviesList extends Component {
    
    render() {
        const emptyMessage=(<p> There are no movies yet.</p>)
        const moviesList=(<div>Movies List</div>)
        console.log(this.props.movies)
        return (
            <div>
                Movies List Comp
                {this.props.movies.length === 0 ? emptyMessage : moviesList}
            </div>
        )
    }
}

MoviesList.propTypes={
    movies: propTypes.array.isRequired
};
export default MoviesList
