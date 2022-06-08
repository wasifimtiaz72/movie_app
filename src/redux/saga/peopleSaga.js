import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* peopleWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING, setPopularPeople)
}


function* setPopularPeople() {
    try {
        const res = yield call(getServerData, 'person', 'popular', 1)
        if (res.status === 200)
            yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data.results })
    } catch (error) {
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_FAILURE })
    }
}