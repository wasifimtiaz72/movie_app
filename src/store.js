import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './redux/reducer/rootReducer'
import { watcher } from '././redux/saga/sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcher)