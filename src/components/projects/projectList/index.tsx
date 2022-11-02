import { isLoadingSelector, reposSelector } from "../../../state/slices/user.slice";
import { useAppSelector } from "../../../state/store/hooks";
import { ProjectCard } from "../projectCard";

export function ProjectList() {
    const repos = useAppSelector(reposSelector)

    return (
        <section style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>{repos?.map(repo => <ProjectCard key={repo.id} repo={repo} />)}</section>
    )
}