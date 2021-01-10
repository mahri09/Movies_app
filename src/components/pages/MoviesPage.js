import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MoviesList from './MoviesList';

export class MoviesPage extends Component {

    static propTypes={
        movies : propTypes.array.isRequired
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList movies={this.props.movies}/>
            </div>
        )
    }
}

/*const mapStateToProps = (state) => {
    return {
        movies : state.moviesReducer
    }
}*/

//bring state from store!
//moviesReducer is comes from doc name witch we send state to comp;
const mapStateToProps = ({moviesReducer}) => {
    return {
        movies:moviesReducer
    }
}

//bring dispatches from the action!
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
