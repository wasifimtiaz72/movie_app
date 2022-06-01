import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* movieWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_MOVIES_PENDING, setPopularMovies)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_MOVIES_PENDING, setLatestMovies)
}

function* setPopularMovies() {
    console.log("movie saaga");
    const res = yield call(getServerData, 'movie', 'popular', 50)
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_MOVIES_SUCCESS, payload: res.data.results })
}
function* setLatestMovies() {
    console.log('latest called');
    const res = yield call(getServerData, 'movie', 'upcoming', 50)
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_LATEST_MOVIES_SUCCESS, payload: res.data.results })
}