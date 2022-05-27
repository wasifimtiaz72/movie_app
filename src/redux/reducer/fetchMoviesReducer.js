
import ACTION_FILTERS from '../app.constants'

const initialState = {
    popularMovies: [],
    upcomingMovies: []
}


export const fetchMoviesReducer = (state = initialState, action) => {
    console.log("movie reducer", action.type);
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                popularMovies: [...state.popularMovies, action.payload]
            }
        case ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS:
            return {
                ...state,
                upcomingMovies: [...state.upcomingMovies, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}