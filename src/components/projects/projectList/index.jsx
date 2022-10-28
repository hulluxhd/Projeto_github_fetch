import { useSelector } from "react-redux";
import { isLoadingSelector, reposSelector } from "../../../state/slices/user.slice";
import { ProjectCard } from "../projectCard";

export function ProjectList() {
    const repos = useSelector(reposSelector)
    const loading = useSelector(isLoadingSelector)
    console.log(loading)

    if (loading) {
        return <h1>loading...</h1>
    }

    return (

        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>{repos?.map(repo => <ProjectCard key={repo.id} repo={repo} />)}</div>

    )
}