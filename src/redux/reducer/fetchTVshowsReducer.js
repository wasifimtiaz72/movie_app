import ACTION_FILTERS from '../app.constants'
const initialState = {
    latestTVshows: [],
    popularTVshows: []
}

export const fetchTVshowsReducer = (state = initialState, action) => {
    console.log('tv reducer', action.payload)
    switch (action.type) {
        case ACTION_FILTERS.SET_LATEST_TV_SHOWS_SUCCESS:
            return {
                ...state,
                latestTVshows: [...action.payload]
            }
        case ACTION_FILTERS.SET_POPULAR_TV_SHOWS_SUCCESS:
            return {
                ...state,
                popularTVshows: [...action.payload]
            }

        default:
            return {
                ...state
            }
    }
}