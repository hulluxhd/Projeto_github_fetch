import { useCallback, useState } from "react"
import { patterns } from "../../state/sagas/patterns"
import { changeUserName } from "../../state/slices/user.slice"
import { useAppDispatch } from "../../state/store/hooks"
import "./input.css"

export function Input(): JSX.Element {

    const [userName, setUsername] = useState<string>("")
    const [error, setError] = useState<string>("")


    const dispatch = useAppDispatch()

    console.log(userName)

    const handleInputChange = useCallback((e: any): void => {
        const value = (e.target as HTMLInputElement).value
        setUsername(value)
    }, [dispatch, userName])


    const handleUserName = (): void => {

        if (!userName) {
            return setError("Por favor, insira um nome de usuário.")
        }

        setUsername("")
        setError("")

        dispatch(changeUserName(userName))
        dispatch({ type: patterns.FETCH_USER_DATA })
    }


    return (
        <div className="input-container">
            <div>
                <input
                    className="input-style"
                    type="text"
                    value={userName}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Procure um nome de usuário..." />
                {error ? <p className="input-error">{error}</p> : null}
            </div>
            <button onClick={handleUserName} className="input-component-button">Pesquisar</button>
        </div>
    )
}

