import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { timesFromStringtoDate } from '../utils/dates';
const NAMES = require('../data/prayers');

const PrayerCard = ({ prayer }) => {
  let [difference, setDifference] = useState();
  let [nextOne, setNextOne] = useState();
  const times = timesFromStringtoDate(prayer);

  const updateDifference = () => {
    const nextOnes = Object.keys(times).filter(t =>
      moment().isBefore(times[t])
    );
    nextOne = nextOnes.length === 0 ? NAMES[0] : nextOnes[0];
    setNextOne(nextOne);
    const diff = moment(times[nextOne].diff(moment())).format('HH:mm:ss');
    setDifference(diff);
  };

  useEffect(() => {
    updateDifference();
    const interval = setInterval(updateDifference, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [prayer]);

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
