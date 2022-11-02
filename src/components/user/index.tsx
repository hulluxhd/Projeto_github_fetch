import { avatarSelector, blogSelector, nameSelector, userNameSelector } from "../../state/slices/user.slice"
import { useAppSelector } from "../../state/store/hooks"
import "./user.style.css"

export function User() {
    const userAvatar = useAppSelector(avatarSelector)
    const userName = useAppSelector(userNameSelector)
    const blog = useAppSelector(blogSelector)
    const name = useAppSelector(nameSelector)

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