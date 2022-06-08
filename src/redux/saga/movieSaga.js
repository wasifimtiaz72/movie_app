import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* movieWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING, setPopularMovies)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_MOVIES_PENDING, setLatestMovies)
}

function* setPopularMovies() {
    try {
        const res = yield call(getServerData, 'movie', 'popular', 1)
        if (res.status === 200)
            yield put({ type: ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS, payload: res.data.results })
    } catch (error) {
        yield put({ type: ACTION_FILTERS.SET_POPULAR_MOVIES_FAILURE })
    }

}
function* setLatestMovies() {
    try {
        const res = yield call(getServerData, 'movie', 'upcoming', 1)
        if (res.status === 200)
            yield put({ type: ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS, payload: res.data.results })
    } catch (error) {
        yield put({ type: ACTION_FILTERS.SET_LATEST_MOVIES_FAILURE })
    }

}