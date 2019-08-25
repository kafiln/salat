import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';
import styled, { css } from 'styled-components';
import SelectList from './SelectList';
import { DEFAULT_TIME_FORMAT } from '../settings';

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

type ClockProps = { changeCity: any };

export default ({ changeCity }: ClockProps) => {
  const { time, lang } = useContext(AppContext);

  return (
    <StyledWrapper>
      <StyledH1>
        <SelectList onChange={changeCity} />
      </StyledH1>
      <StyledH2>{time.locale(lang).format('dddd LL')}</StyledH2>
      <StyledH3>
        <span>{moment(time).format(DEFAULT_TIME_FORMAT)}</span>
      </StyledH3>
    </StyledWrapper>
  );
};
