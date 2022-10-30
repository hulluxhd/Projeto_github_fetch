import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { patterns } from "../../state/sagas/patterns"
import { changeUserName, searchUserSelector, swapUser, userNameSelector } from "../../state/slices/user.slice"
import "./input.css"

export function Input() {

    const [userName, setUsername] = useState("")
    const [error, setError] = useState("")


    const dispatch = useDispatch()

    console.log(userName)

    const handleInputChange = useCallback(e => {
        setUsername(e.target.value)
            , [userName]
    })


    const handleUserName = () => {

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
                {console.log(error)}
            </div>
            <button onClick={handleUserName} className="input-component-button">Pesquisar</button>
        </div>
    )
}

