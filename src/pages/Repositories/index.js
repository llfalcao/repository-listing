import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function Repositories() {
    const history = useHistory("");
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem("repositoriesName");
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push("/repository-listing");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map((repository) => {
                    return (
                        <S.ListItem key={repository}>
                            Repository: {repository}
                        </S.ListItem>
                    );
                })}
            </S.List>
            <S.LinkHome to="/repository-listing">Back</S.LinkHome>
        </S.Container>
    );
}

export default Repositories;
