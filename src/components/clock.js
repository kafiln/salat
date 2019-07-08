import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { toTitleCase } from '../utils/strings';

export default function clock({ format, city }) {
  const [time, setTime] = useState(moment());
  const defaultFormat = 'HH:mm:ss';
  useEffect(() => {
    const interval = setInterval(() => setTime(moment()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <h1>{city}</h1>
      <h2>{toTitleCase(time.format('dddd LL'))}</h2>
      <h2>
        <span>{moment(time).format(format ? format : defaultFormat)}</span>
      </h2>
    </div>
  );
}
