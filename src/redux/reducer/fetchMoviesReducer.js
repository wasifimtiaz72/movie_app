import ACTION_FILTERS from '../app.constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
    popularMovies: [],
    latestMovies: [],
    error: false
})

export const fetchMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS:
            return state.set('popularMovies', action.payload)

        case ACTION_FILTERS.SET_POPULAR_MOVIES_FAILURE:
            return state.set('error', true)

        case ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS:
            return state.set('latestMovies', action.payload)

        case ACTION_FILTERS.SET_LATEST_MOVIES_FAILURE:
            return state.set('error', true)

        default:
            return state
    }
}