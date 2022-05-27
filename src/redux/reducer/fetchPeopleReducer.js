import ACTION_FILTERS from '../app.constants'

const initialState = {
    latestPeople: [],
    popularPeople: []
}

export const fetchPeopleReducer = (state = initialState, action) => {
    console.log('people reducer', action.type)
    switch (action.type) {
        case ACTION_FILTERS.SET_LATEST_PEOPLE_SUCCESS:
            return {
                ...state,
                latestPeople: [...state.latestPeople, action.payload]
            }
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS:
            return {
                ...state,
                latestPeople: [...state.latestPeople, action.payload]
            }

        default:
            return {
                ...state
            }
    }
}