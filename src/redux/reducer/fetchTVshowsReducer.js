import ACTION_FILTERS from '../app.constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
    latestTVshows: [],
    popularTVshows: [],
    error: false
})

export const fetchTVshowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_LATEST_TV_SHOWS_SUCCESS:
            return state.set('latestTVshows', action.payload)

        case ACTION_FILTERS.SET_LATEST_TV_SHOWS_FAILURE:
            return state.set('error', true)

        case ACTION_FILTERS.SET_POPULAR_TV_SHOWS_SUCCESS:
            return state.set('popularTVshows', action.payload)

        case ACTION_FILTERS.SET_POPULAR_TV_SHOWS_FAILURE:
            return state.set('error', true)

        default:
            return state
    }
}