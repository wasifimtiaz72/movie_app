import ACTION_FILTERS from '../app.constants'

const initialState = [{
    popularPeople: []
}]

export const fetchPeopleReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS:
            return {
                ...state,
                popularPeople: [...action.payload]
            }

        default:
            return {
                ...state
            }
    }
}
