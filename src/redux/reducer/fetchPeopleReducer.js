import ACTION_FILTERS from '../app.constants'

const initialState = [{
    popularPeople: [],
    error: false
}]

export const fetchPeopleReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS:
            return {
                ...state,
                popularPeople: [...action.payload]
            }
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_FAILURE:
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
