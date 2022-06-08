
import ACTION_FILTERS from '../app.constants'

const initialState = {
    popularMovies: [],
    latestMovies: [],
    error: false
}

export const fetchMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                popularMovies: [...action.payload]
            }
        case ACTION_FILTERS.SET_POPULAR_MOVIES_FAILURE:
            return {
                ...state,
                error: true
            }
        case ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS:
            return {
                ...state,
                latestMovies: [...action.payload]
            }
        case ACTION_FILTERS.SET_LATEST_MOVIES_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}