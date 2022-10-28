import { call, put, select } from "redux-saga/effects";
import { api } from "../../../services/api";
import { routes } from "../../../services/routes";
import { fetchDataAction, isLoadingAction, userNameSelector } from "../../slices/user.slice";


/**
 * Função que recupera os dados de repositórios do github para um determinado usuário e gerencia efeitos colaterais:
 * 1. recupera a url de imagem do próprio github e guarda no state
 * 
 */
export function* fetchUserData() {

    yield put(isLoadingAction(true))

    const user = yield select(userNameSelector)

    try {

        const userInfoResults = yield call(api.get, `${user}`)

        const userInfo = {
            avatar_url: userInfoResults.data.avatar_url,
            blog: userInfoResults.data.blog
        }

        yield put({ type: "user/setUserInfo", payload: userInfo })
        
        console.log(userInfo.data.avatar_url)

        const results = yield call(api.get, `${user}/${routes.REPOS}`)

        const dataWithParams = results.data?.map(repo => {

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
    }
    yield put(isLoadingAction(false))

}