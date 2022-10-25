import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { routes } from "../../../services/routes";
import { fetchDataAction } from "../../slices/user.slice";

export function fetchUserData(user = "hulluxhd") {
    const results = yield call(api.get(`${user}/${routes.REPOS}`))
    console.log(results)
    yield put(fetchDataAction(results))
}