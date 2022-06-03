
import ACTION_FILTERS from './../app.constants'

export const getPopularMovies = () => {
    return { type: ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING }
}
export const getLatestMovies = () => {
    return { type: ACTION_FILTERS.SET_LATEST_MOVIES_PENDING }
}
export const getPopularTVshows = () => {
    return { type: ACTION_FILTERS.SET_POPULAR_TV_SHOWS_PENDING }
}
export const getLatestTVshows = () => {
    return { type: ACTION_FILTERS.SET_LATEST_TV_SHOWS_PENDING }
}
export const getPopularPeople = () => {
    return { type: ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING }
}
export const getLatestPeople = () => {
    return { type: ACTION_FILTERS.SET_LATEST_PEOPLE_PENDING }
}