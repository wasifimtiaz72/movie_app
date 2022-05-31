import ACTION_FILTERS from '../app.constants'

const initialState = []

export const fetchPeopleReducer = (state = [], action) => {
    console.log('people reducer', action.payload)
    console.log('people  Store', state);
    switch (action.type) {
        case ACTION_FILTERS.SET_LATEST_PEOPLE_SUCCESS:
            return {
                ...state,
                latestPeople: action.payload
            }
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS:
            return {
                ...state,
                popularPeople: { ...action.payload }
            }

        default:
            return {
                ...state
            }
    }
}