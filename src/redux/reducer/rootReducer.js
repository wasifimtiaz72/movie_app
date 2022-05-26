import { combineReducers } from 'redux'
import { fetchMoviesReducer } from './fetchMoviesReducer'
import { fetchTVshowsReducer } from './fetchTVshowsReducer'
import { fetchPeopleReducer } from './fetchPeopleReducer'


export const rootReducer = combineReducers({
    fetchMoviesReducer,
    fetchTVshowsReducer,
    fetchPeopleReducer
})