import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
    name: "GitHub Explore",
    description: "Project - ReactJS",
    url: "https://github.com/gboliveir/github-explore"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem />
            </ul>
        </section>
    );
}