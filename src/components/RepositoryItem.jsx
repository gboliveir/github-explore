
export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository?.name ?? "Name not found"}</strong>
            <p>{props.repository?.description ?? "Description not found"}</p>

            <a href={props.repository?.url ?? "Url not found"}>
                Acessar repositório
            </a>
        </li>
    );
}