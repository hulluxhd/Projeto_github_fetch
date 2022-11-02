import { isLoadingSelector } from "../../state/slices/user.slice"
import { useAppSelector } from "../../state/store/hooks"
import { Loading } from "../loading"
import { Wrapper900pxProps } from "./wrapper900px.type"

export function Wrapper900px(props: Wrapper900pxProps) {
    
    const {children} = props

    const loading = useAppSelector(isLoadingSelector)
    const style = { width: '900px', margin: "0 auto" }

    if (loading) return <Loading style={style} />

    return <div style={style}>{children}</div>
}