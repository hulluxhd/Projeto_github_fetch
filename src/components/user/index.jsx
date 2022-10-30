import { useSelector } from "react-redux"
import { avatarSelector, blogSelector, isLoadingSelector, nameSelector, userNameSelector } from "../../state/slices/user.slice"
import { Loading } from "../loading"
import "./user.style.css"

export function User() {
    const userAvatar = useSelector(avatarSelector)
    const userName = useSelector(userNameSelector)
    const blog = useSelector(blogSelector)
    const name = useSelector(nameSelector)
    const loading = useSelector(isLoadingSelector)




    return (
        <section className="user-container">
            <img src={userAvatar} />
            <div className="user-info">
                <h3>{userName}</h3>
                <p className="user-name">{ name}</p>
                {blog && <p><a href={blog}>{blog}</a></p>}
            </div>
        </section>
    )
}