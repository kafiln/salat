import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../context/AppContext';

export default function Clock({ format }) {
  const { cities, time, id, lang } = useContext(AppContext);
  const city = cities.find(e => e.id === id).name;
  const defaultFormat = 'HH:mm:ss';

  return (
    <div className="clock">
      <h1>{city}</h1>
      <h2>{time.locale(lang).format('dddd LL')}</h2>
      <h2>
        <span>{moment(time).format(format ? format : defaultFormat)}</span>
      </h2>
    </div>
  );
}
