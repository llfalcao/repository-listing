import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: #cccccc;
  padding: 2rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #72cbff1d;
  color: #dadada;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  font-family: 'Segoe UI', sans-serif;
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
  font-weight: 600;
`;
