import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory('');
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) =>
          repositoriesName.push(repository.name),
        );
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName),
        );
        history.push('/repository-listing/repositories');
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content onSubmit={handleSearch}>
        <S.Input
          className="userInput"
          placeholder="User"
          value={user}
          onChange={function (e) {
            setUser(e.target.value);
          }}
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
}

export default Home;
