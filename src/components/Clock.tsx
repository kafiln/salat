import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 2vh;
`;

const StyledH = css`
  text-align: center;
  padding: 1rem;
`;

const StyledH1 = styled.h1`
  ${StyledH}
`;
const StyledH2 = styled.h2`
  ${StyledH}
  text-transform: capitalize;
`;
const StyledH3 = styled.h3`
  ${StyledH}
`;

type ClockProps = { format?: string };

export default ({ format }: ClockProps) => {
  const { cities, time, id, lang } = useContext(AppContext);
  const city = cities ? cities.find((e: any) => e.id === id)!.name : null;
  const defaultFormat = 'HH:mm:ss';

  return (
    <StyledWrapper>
      <StyledH1>{city}</StyledH1>
      <StyledH2>{time.locale(lang).format('dddd LL')}</StyledH2>
      <StyledH3>
        <span>{moment(time).format(format ? format : defaultFormat)}</span>
      </StyledH3>
    </StyledWrapper>
  );
};
