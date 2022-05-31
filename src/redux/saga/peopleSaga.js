import { takeEvery, call, put } from "redux-saga/effects";
import { getServerData } from "../../services/api";
import ACTION_FILTERS from '../app.constants';


export function* peopleWatcher() {
    takeEvery(ACTION_FILTERS.SET_POPULAR_PEOPLE_PENDING, setPopularPeople)
    takeEvery(ACTION_FILTERS.SET_LATEST_PEOPLE_PENDING, setLatestpeople)
}


function* setPopularPeople() {
    console.log("people saga");

    const res = yield call(getServerData, 'people', 'popular')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data.results })

}

function* setLatestpeople() {
    const res = yield call(getServerData, 'people', 'latest')
    if (res.status == 200)
        yield put({ type: ACTION_FILTERS.SET_POPULAR_PEOPLE_SUCCESS, payload: res.data })

}