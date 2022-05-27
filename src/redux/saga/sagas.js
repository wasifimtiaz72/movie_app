import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* watcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING, setPopularMovies)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_MOVIES_PENDING, setLatestMovies)
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING, setPopularPeople)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_PEOPLE_PENDING, setLatestpeople)
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_TV_SHOWS_PENDING, setPopularTVshow)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_TV_SHOWS_PENDING, setLatestTVshow)
}

function* setPopularMovies() {
    const res = yield call(getServerData, 'movie', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS, payload: res.data })
}
function* setLatestMovies() {
    const res = yield call(getServerData, 'movie', 'latest')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS, payload: res.data })
}
function* setPopularPeople() {
    const res = yield call(getServerData, 'people', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data })

}
function* setLatestpeople() {
    const res = yield call(getServerData, 'people', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data })

}
function* setPopularTVshow() {
    const res = yield call(getServerData, 'tv', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_TV_SHOWS_SUCCESS, payload: res.data })

}
function* setLatestTVshow() {
    const res = yield call(getServerData, 'tv', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_LATEST_TV_SHOWS_SUCCESS, payload: res.data })

}
