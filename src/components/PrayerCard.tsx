import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';

import { timesFromStringtoDate } from '../utils/dates';
const NAMES = require('../data/prayers');
const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

const PrayerCard = () => {
  const { prayers, id, time, lang } = useContext(AppContext);
  const myStyles = {
    flexDirection: `${lang === 'fr' ? 'row' : 'row-reverse'}`
  } as React.CSSProperties;

  const prayer = (prayers || []).find((e: any) => e.id === id);

  let [difference, setDifference] = useState();
  let [nextOne, setNextOne] = useState();
  const times = timesFromStringtoDate(prayer);

  const updateDifference = () => {
    const nextOnes = Object.keys(times).filter(t => time.isBefore(times[t]));
    nextOne = nextOnes.length === 0 ? NAMES[0] : nextOnes[0];
    setNextOne(nextOne);
    const diff = moment(times[nextOne].diff(time)).format(DEFAULT_TIME_FORMAT);
    setDifference(diff);
  };

  useEffect(() => {
    updateDifference();
    const interval = setInterval(updateDifference, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className="card">
      <ul>
        {Object.keys(NAMES).map(name => {
          return (
            <li
              style={myStyles}
              key={name}
              className={name === nextOne ? 'next-prayer' : ''}
            >
              <div className="name">{NAMES[name][lang]}</div>
              {name === nextOne && (
                <div className="difference">{difference}</div>
              )}
              <div className="time">{(prayer as any)[name]}</div>
            </li>
          );
        })}
      </ul>
      <dl />
    </div>
  );
};

export default PrayerCard;
