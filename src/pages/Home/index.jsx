import { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  document.title = 'Repository Listing';
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`,
      );
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => repositoriesName.push(repository.name));
      localStorage.setItem(
        'repositoriesName',
        JSON.stringify(repositoriesName),
      );
      localStorage.setItem('user', user);
      navigate('repositories');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <S.HomeContainer>
      <S.Content onSubmit={handleSearch}>
        <S.Input
          className="userInput"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <S.Button type="submit" onClick={handleSearch}>
          Search
        </S.Button>
      </S.Content>

      {error ? (
        <S.ErrorMsg>An error occurred. Please try again.</S.ErrorMsg>
      ) : (
        ''
      )}
    </S.HomeContainer>
  );
};

export default Home;
