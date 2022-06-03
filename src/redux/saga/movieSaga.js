import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* movieWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING, setPopularMovies)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_MOVIES_PENDING, setLatestMovies)
}

function* setPopularMovies() {
    const res = yield call(getServerData, 'movie', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS, payload: res.data.results })

}
function* setLatestMovies() {
    const res = yield call(getServerData, 'movie', 'upcoming')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS, payload: res.data.results })
}