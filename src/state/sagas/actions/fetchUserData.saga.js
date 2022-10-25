import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { routes } from "../../../services/routes";
import { fetchDataAction, isLoadingAction } from "../../slices/user.slice";

export function* fetchUserData({ payload: user = 'hulluxhd' }) {

    yield put(isLoadingAction(true))

    console.log(user)
    try {
        const results = yield call(api.get, `${user}/${routes.REPOS}`)
        console.log(results)
        yield put(fetchDataAction(results.data))
    } catch (e) {
        alert(e)
    } finally {
        yield put(isLoadingAction(false))
    }
}