import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MoviesList from '../MoviesList';
import fetchMovies from '../../actions/moviesAction';

export class MoviesPage extends Component {

    static propTypes={
        movies : propTypes.object.isRequired
    };

    componentDidMount(){
        this.props.fetchMovies();
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList propsMovies={this.props.movies}/>
            </div>
        )
    }
}

/*const mapStateToProps = (state) => {
    return {
        movies : state.moviesReducer
    }
}*/

//get state from store!
//moviesReducer is comes from doc name witch we send state to comp;
const mapStateToProps = ({moviesReducer}) => {
    return {
        movies:moviesReducer
    }
}

  //get dispatches from the action!
const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
