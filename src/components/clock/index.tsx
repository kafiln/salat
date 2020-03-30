import React, { useContext } from 'react';
import moment from 'moment';

import { AppContext } from '../../context/AppContext';
import { DEFAULT_TIME_FORMAT, DEFAULT_DATE_FORMAT } from '../../settings';
import { Wrapper, H2, H3 } from './styles';

const Clock = () => {
  const { time, lang } = useContext(AppContext);

  return (
    <Wrapper>
      <H2>{time.locale(lang).format(DEFAULT_DATE_FORMAT)}</H2>
      <H3>
        <span>{moment(time).format(DEFAULT_TIME_FORMAT)}</span>
      </H3>
    </Wrapper>
  );
};

export default Clock;
