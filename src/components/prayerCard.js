import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';

import 'moment/locale/fr';
import { timesFromStringtoDate } from '../utils/dates';
const NAMES = require('../data/prayers');
const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

const PrayerCard = () => {
  const { prayers, id, time } = useContext(AppContext);
  const prayer = prayers.find(e => e.id === id);

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
        {NAMES.map(name => {
          return (
            <li key={name} className={name === nextOne ? 'next-prayer' : ''}>
              <div className="name">{name}</div>
              {name === nextOne && (
                <div className="difference">{difference}</div>
              )}
              <div className="time">{prayer[name]}</div>
            </li>
          );
        })}
      </ul>
      <dl />
    </div>
  );
};

export default PrayerCard;
