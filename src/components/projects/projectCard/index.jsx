import "./project-card.style.css"
import {AiOutlineStar, AiFillStar} from "react-icons/ai"

export function ProjectCard(props) {
    const { name, html_url, description, language } = props.repo

    return (
        <div className="card-container">
            <a target="_blank" href={html_url}>
                <h3>{name}</h3>
            </a>
            {description ? <p>{description}</p> : null}
            {language ? <p ><span className="card-language">Linguagem:</span> {language}</p> : null}
            <AiOutlineStar className="card-fav-icon"/>
        </div>
    )

}