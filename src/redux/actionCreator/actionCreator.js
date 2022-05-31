
import ACTION_FILTERS from './../app.constants'

export const getPopularMovies = () => {
    console.log('action dispatched');
    return { type: ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING }
}
export const getLatestMovies = () => {
    console.log('action dispatched getLatestMovies');
    return { type: ACTION_FILTERS.SET_LATEST_MOVIES_PENDING }
}
export const getPopularTVshows = () => {
    console.log('populat TV dispatched');
    return { type: ACTION_FILTERS.SET_POPULAR_TV_SHOWS_PENDING }
}
export const getLatestTVshows = () => {
    console.log('latest TV dispatched');
    return { type: ACTION_FILTERS.SET_LATEST_TV_SHOWS_PENDING }
}
export const getPopularPeople = () => {
    console.log('action dispatched');
    return { type: ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING }
}
export const getLatestPeople = () => {
    console.log('action dispatched');
    return { type: ACTION_FILTERS.SET_LATEST_PEOPLE_PENDING }
}