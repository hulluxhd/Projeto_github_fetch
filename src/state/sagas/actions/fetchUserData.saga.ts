import { call, put, select } from "redux-saga/effects";
import { api } from "../../../services/api";
import { routes } from "../../../services/routes";
import { UserRepo } from "../../../types/repo.type";
import { fetchDataAction, isLoadingAction, userNameSelector, UserStateInfo } from "../../slices/user.slice";


/**
 * Função que recupera os dados de repositórios do github para um determinado usuário e gerencia efeitos colaterais:
 * 1. recupera a url de imagem do próprio github e guarda no state
 * 2. recupera os repositórios da conta do usuário
 */
export function* fetchUserData() {

    yield put(isLoadingAction(true))

    const user = yield select(userNameSelector)

    if(!user) throw Error("There is no user selected")

    try {

        const userInfoResults = yield call(api.get, `${user}`)

        const userInfo: UserStateInfo = {
            avatar_url: userInfoResults.data?.avatar_url,
            blog: userInfoResults.data?.blog,
            name: userInfoResults.data?.name,
        }

        yield put({ type: "user/setUserInfo", payload: userInfo })
        
        const results = yield call(api.get, `${user}/${routes.REPOS}`)

        const dataWithParams = results.data?.map((repo: UserRepo) => {

            const { id, name, html_url, description, language } = repo

            return {
                id,
                name,
                html_url,
                description,
                language,
                favourite: false
            }
        })

        yield put(fetchDataAction(dataWithParams))
    } catch (e) {
        alert(e)
        console.error(e)
    }
    yield put(isLoadingAction(false))

}