import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import { REFRESH_TIME } from '../../context/types';
import usePrayers from '../../hooks/usePrayers';
import { DEFAULT_TIME_FORMAT } from '../../settings';
import { parseTime } from '../../utils/dates';
import { Difference, Li, Name, Time, Ul } from './styles';

const NAMES = require('../../data/prayers.json');

const Daily = () => {
  const { time, lang, dispatch, id } = useContext(AppContext);
  const prayers = usePrayers(id, true);
  let prayer = (prayers || [])[0];

  let [diff, setDifference] = useState('');
  let [next, setNextOne] = useState('');

  useEffect(() => {
    if (prayer) {
      const nextOnes = Object.keys(prayer).filter((t) =>
        time.isBefore(prayer[t])
      );
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      setNextOne(next);
      const diff = moment(moment(prayer[next]).diff(time)).format(
        DEFAULT_TIME_FORMAT
      );
      setDifference(diff);
    }
  }, [time, prayer]);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: REFRESH_TIME, payload: null }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  return prayer ? (
    <Ul>
      {Object.keys(NAMES).map((name) => {
        return (
          <Li key={name} lang={lang} className={name === next ? 'next' : ''}>
            <Name>{NAMES[name][lang]}</Name>
            {name === next && <Difference>{diff}</Difference>}
            <Time>{parseTime((prayer as any)[name])}</Time>
          </Li>
        );
      })}
    </Ul>
  ) : (
    <Spinner />
  );
};
export default Daily;
