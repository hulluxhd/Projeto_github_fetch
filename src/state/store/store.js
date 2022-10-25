import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { runSaga } from "../sagas/runSagas";

const middlewareSaga = createSagaMiddleware()

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware, middlewareSaga]
})

middlewareSaga.run(runSaga)