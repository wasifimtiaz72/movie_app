import ACTION_FILTERS from '../app.constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
    popularPeople: [],
    error: false
})


export const fetchPeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS:
            return state.set('popularPeople', action.payload)

        case ACTION_FILTERS.SET_POPULAR_PEOPLE_FAILURE:
            return state.set('error', true)

        default:
            return state

    }
}
