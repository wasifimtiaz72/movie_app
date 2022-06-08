import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';



export function* tvWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_TV_SHOWS_PENDING, setPopularTVshow)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_TV_SHOWS_PENDING, setLatestTVshow)

}

function* setPopularTVshow() {
    try {
        const res = yield call(getServerData, 'tv', 'popular', 1)
        if (res.status === 200)
            yield put({ type: ACTION_FILTERS.SET_POPULAR_TV_SHOWS_SUCCESS, payload: res.data.results })

    } catch (error) {
        yield put({ type: ACTION_FILTERS.SET_POPULAR_TV_SHOWS_FAILURE })
    }

}
function* setLatestTVshow() {
    try {
        const res = yield call(getServerData, 'tv', 'top_rated', 1)
        if (res.status === 200)
            yield put({ type: ACTION_FILTERS.SET_LATEST_TV_SHOWS_SUCCESS, payload: res.data.results })

    } catch (error) {
        yield put({ type: ACTION_FILTERS.SET_LATEST_TV_SHOWS_FAILURE })

    }

}