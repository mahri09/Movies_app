/* eslint-disable import/no-anonymous-default-export */
import {  FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from "../actions/moviesAction";

//we make an object our initialState to add another states in it
const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: {},
};

const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES_PENDING:
        return { ...state, fetching: true };
        case FETCH_MOVIES_FULFILLED:
        return { ...state, movies: payload, fetching:false, fetched: true };
        case FETCH_MOVIES_REJECTED:
        return { ...state, error: payload, fetching:false};

        default:
        return state;
    }
};

export default moviesReducer;
