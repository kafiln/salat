import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container, Wrapper, Spinner } from './styles';

export default () => {
  const { lang } = useContext(AppContext);
  //TODO: Handle i18n properly
  const text = lang === 'fr' ? 'Chargement en cours ...' : '... جار التحميل';
  return (
    <Container>
      <Wrapper>
        <Spinner />
        <h4>{text}</h4>
      </Wrapper>
    </Container>
  );
};
