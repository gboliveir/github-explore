const nameRepository1 = "ReactJS";

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{nameRepository1}</strong>
                    <p>Descrição</p>

                    <a href="#">
                        Acessar repositório
                    </a>
                </li>

                <li>
                    <strong>NameRepository</strong>
                    <p>Descrição</p>

                    <a href="#">
                        Acessar repositório
                    </a>
                </li>

                <li>
                    <strong>NameRepository</strong>
                    <p>Descrição</p>

                    <a href="#">
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}