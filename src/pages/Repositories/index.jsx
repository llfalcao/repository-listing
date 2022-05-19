import { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (!repositoriesName) navigate('/repository-listing');

    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);

    const user = localStorage.getItem('user');
    document.title = `${user}'s repos`;
  }, [navigate]);

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        {repositories.map((repo) => {
          return <S.ListItem key={repo}>Repository: {repo}</S.ListItem>;
        })}
      </S.List>
      <S.LinkHome to="/repository-listing">Back</S.LinkHome>
    </S.Container>
  );
};

export default Repositories;
