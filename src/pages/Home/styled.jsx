import styled from 'styled-components';

const segoeUI = "'Segoe UI', sans-serif";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 20rem;
  border: 1px solid #78aeff;
  border-right: transparent;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  font-family: ${segoeUI};

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 100%;
  padding: 0 2rem;
  background: #092250;
  color: #eee;
  border: 1px solid #78aeff;
  border-left: transparent;
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;
  font-family: ${segoeUI};
  font-size: 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #dadada;
  font-weight: 600;
  margin: 1rem;
`;
