import { all, fork, takeLatest } from "redux-saga/effects";

import { movieWatcher } from './movieSaga'
import { peopleWatcher } from './peopleSaga'
import { tvWatcher } from './tvSaga'


export function* rootSaga() {
    yield all([
        fork(movieWatcher),
        fork(peopleWatcher),
        fork(tvWatcher)
    ]);
};