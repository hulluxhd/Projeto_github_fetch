import { takeLatest } from 'redux-saga/effects'
import { fetchUserData } from './actions/fetchUserData.saga'
import { patterns } from './patterns'

export function* runSaga() {
    yield takeLatest(patterns.FETCH_USER_DATA, fetchUserData)
}