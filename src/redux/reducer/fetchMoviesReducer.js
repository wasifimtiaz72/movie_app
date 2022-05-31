
import ACTION_FILTERS from '../app.constants'

const initialState = {
    popularMovies: [],
    latestMovies: []
}

console.log('store outer', initialState);
export const fetchMoviesReducer = (state = initialState, action) => {
    console.log("movie reducer", action.payload);
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                popularMovies: [...action.payload]
            }
        case ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS:
            return {
                ...state,
                latestMovies: [...action.payload]
            }
        default:
            return {
                ...state
            }
    }
}