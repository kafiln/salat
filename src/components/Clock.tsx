import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';
import styled, { css } from 'styled-components';

import { DEFAULT_TIME_FORMAT } from '../settings';

const StyledWrapper = styled.div`
  margin: 1vh 0;
`;

const StyledH = css`
  text-align: center;
  padding: 1rem;
`;

const StyledH2 = styled.h2`
  ${StyledH}
  text-transform: capitalize;
`;
const StyledH3 = styled.h3`
  ${StyledH}
`;

const Clock = () => {
  const { time, lang } = useContext(AppContext);

  return (
    <StyledWrapper>
      <StyledH2>{time.locale(lang).format('dddd LL')}</StyledH2>
      <StyledH3>
        <span>{moment(time).format(DEFAULT_TIME_FORMAT)}</span>
      </StyledH3>
    </StyledWrapper>
  );
};

export default Clock;
