import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* peopleWatcher() {
    yield takeEvery(ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING, setPopularPeople)
    yield takeEvery(ACTION_FILTERS.SET_LATEST_PEOPLE_PENDING, setLatestpeople)
}


function* setPopularPeople() {
    ("people saga");

    const res = yield call(getServerData, 'person', 'popular', 50)
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data.results })

}

function* setLatestpeople() {
    const res = yield call(getServerData, 'person', 'latest', 50)
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data })

}