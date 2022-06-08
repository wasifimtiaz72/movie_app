import ACTION_FILTERS from '../app.constants'
const initialState = {
    latestTVshows: [],
    popularTVshows: [],
    error: false
}

export const fetchTVshowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_LATEST_TV_SHOWS_SUCCESS:
            return {
                ...state,
                latestTVshows: [...action.payload]
            }
        case ACTION_FILTERS.SET_LATEST_TV_SHOWS_FAILURE:
            return {
                ...state,
                error: true
            }
        case ACTION_FILTERS.SET_POPULAR_TV_SHOWS_SUCCESS:
            return {
                ...state,
                popularTVshows: [...action.payload]
            }
        case ACTION_FILTERS.SET_POPULAR_TV_SHOWS_FAILURE:
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