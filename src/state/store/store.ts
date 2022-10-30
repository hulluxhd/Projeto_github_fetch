import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { runSaga } from "../sagas/runSagas";
import userReducer from "../slices/user.slice"

const middlewareSaga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), middlewareSaga]
})

middlewareSaga.run(runSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch