import moment from 'moment';
const NAMES = require('../data/prayers');

export const parseDateTime = (timeString: string, day: number) => {
  const [hour, minute] = timeString.split(':');
  const newDay = moment();
  newDay.date(day);
  newDay.hour(parseInt(hour));
  newDay.minute(parseInt(minute));
  newDay.second(0);
  return newDay;
};

export const timesFromStringtoDate = (prayer: any) => {
  let result: any = {};
  Object.keys(NAMES).forEach(name => {
    result[name] = moment(parseDateTime(prayer[name], prayer.day));
  });
  return result;
};
