import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { AppContext } from '../context/AppContext';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  flex: 1;
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Wrapper)`
  height: 100vh;
`;

export default () => {
  const { lang } = useContext(AppContext);
  const text = lang === 'fr' ? 'Chargement en cours ...' : '... جار التحميل';
  return (
    <Container>
      <Wrapper>
        <Spinner />
        <h1>{text}</h1>
      </Wrapper>
    </Container>
  );
};
