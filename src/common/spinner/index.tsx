import React from 'react';
import { Container, Wrapper, Spinner } from './styles';
import { FormattedMessage } from 'react-intl';
import {KEYS} from '../../i18n';

export default () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
        <h4><FormattedMessage  id={KEYS.SPINNER_LOADING}/></h4>
      </Wrapper>
    </Container>
  );
};
