import "./header.style.css"
import { BsGithub } from "react-icons/bs"



export function Header() {
    return (
        <header className="header">
            <div>
                <BsGithub />
                <h2>Github searcher</h2>
            </div>
            <div className="header-links">
                <p>Início</p>
                <p>Favoritos</p>
            </div>
        </header>
    )
}