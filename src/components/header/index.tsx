import "./header.style.css"
import { BsGithub } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { clear } from "../../state/slices/user.slice"
import { patterns } from "../../state/sagas/patterns"



export function Header() {

    const dispatch = useDispatch(clear)

    const handleClear = () => {
        dispatch(clear())
        dispatch({type: patterns.FETCH_USER_DATA})
    }

    return (
        <header className="header">
            <div onClick={handleClear}>
                <BsGithub size={"2rem"}/>
                <h2>Github searcher</h2>
            </div>
            <div className="header-links">
                <p>Início</p>
            </div>
        </header>
    )
}