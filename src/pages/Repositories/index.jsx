import { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (!repositoriesName) navigate('/repository-listing');

    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);

    setUser(localStorage.getItem('user'));
    document.title = `${user}'s repos`;
  }, [navigate, user]);

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        {repositories.map((repo) => (
          <S.ListItem key={repo}>
            <S.Repository
              href={`https://github.com/${user}/${repo}`}
              target="_blank"
            >
              {repo}
            </S.Repository>
          </S.ListItem>
        ))}
      </S.List>
      <S.LinkHome to="/repository-listing">Back</S.LinkHome>
    </S.Container>
  );
};

export default Repositories;
