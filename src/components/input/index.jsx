import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { patterns } from "../../state/sagas/patterns"
import { changeUserName } from "../../state/slices/user.slice"
import "./input.css"

export function Input() {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

    console.log(userName)

    const handleInputChange = useCallback(e => {
        setUserName(e.target.value)
            , [userName]
    })


    const handleUserName = () => {
        dispatch(changeUserName(userName))
        dispatch({ type: patterns.FETCH_USER_DATA })
    }


    return (
        <div className="input-container">
            <input type="text" value={userName} onChange={(e) => handleInputChange(e)} placeholder="Procure um nome de usuário..." />
            <button onClick={handleUserName} className="input-component-button">Pesquisar</button>
        </div>
    )
}

