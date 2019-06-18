import moment from 'moment';
const NAMES = require('../data/prayers');


export const parseDateTime = (timeString, day) => {
  const [hour, minute] = timeString.split(':');
  const newDay = new Date(day);
  newDay.setHours(hour);
  newDay.setMinutes(minute);
  return newDay;
};

export const timesFromStringtoDate = prayer => {
  let result = {};
  NAMES.forEach(name => {
    result[name] = moment(parseDateTime(prayer[name], prayer.day));
  });
  return result;
};
