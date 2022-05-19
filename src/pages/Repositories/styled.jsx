import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 991px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: #cccccc;
  padding: 2rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #72cbff1d;
  color: #dadada;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
  border-radius: 0.25rem;
  font-weight: 500;
`;

export const Repository = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #2c627a;
  color: #dadada;
  padding: 0.5rem 0;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: 500;
`;
