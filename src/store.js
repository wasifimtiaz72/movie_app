import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './redux/reducer/rootReducer'
import { rootSaga } from './redux/saga/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)