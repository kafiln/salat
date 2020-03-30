import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../../context/AppContext';
import { timesFromStringtoDate } from '../../utils/dates';
import { DEFAULT_TIME_FORMAT } from '../../settings';
import Spinner from '../../common/spinner';
import { Ul, Li, Name, Difference, Time } from './styles';

const NAMES = require('../../data/prayers.json');

const PrayerCard = () => {
  const { prayers, time, lang } = useContext(AppContext);

  const prayer = (prayers || [])[0];

  let [diff, setDifference] = useState('');
  let [next, setNextOne] = useState('');

  useEffect(() => {
    if (prayer) {
      const times = timesFromStringtoDate(prayer);
      const nextOnes = Object.keys(times).filter(t => time.isBefore(times[t]));
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      setNextOne(next);
      const diff = moment(times[next].diff(time)).format(DEFAULT_TIME_FORMAT);
      setDifference(diff);
    }
  }, [time, prayer]);

  return prayer ? (
    <Ul>
      {Object.keys(NAMES).map(name => {
        return (
          <Li key={name} lang={lang} className={name === next ? 'next' : ''}>
            <Name>{NAMES[name][lang]}</Name>
            {name === next && <Difference>{diff}</Difference>}
            <Time>{(prayer as any)[name]}</Time>
          </Li>
        );
      })}
    </Ul>
  ) : (
    <Spinner />
  );
};
export default PrayerCard;
