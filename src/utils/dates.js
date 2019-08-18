import moment from 'moment';
const NAMES = require('../data/prayers');

export const parseDateTime = (timeString, day) => {
  const [hour, minute] = timeString.split(':');
  const newDay = new moment();
  newDay.date(day);
  newDay.hour(hour);
  newDay.minute(minute);
  newDay.second(0);
  return newDay;
};

export const timesFromStringtoDate = prayer => {
  let result = {};
  Object.keys(NAMES).forEach(name => {
    result[name] = moment(parseDateTime(prayer[name], prayer.day));
  });
  return result;
};
