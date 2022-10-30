import { useSelector } from "react-redux"
import { isLoadingSelector } from "../../state/slices/user.slice"
import { Loading } from "../loading"

export function Wrapper900px({ children }) {

    const loading = useSelector(isLoadingSelector)
    const style = { width: '900px', margin: "0 auto" }

    if (loading) return <Loading style={style} />

    return <div style={style}>{children}</div>
}