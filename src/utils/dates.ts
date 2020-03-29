import moment, { Moment } from 'moment';
import { TIME_OFFSET } from '../settings';
const NAMES = require('../data/prayers');

export const parseDateTime = (timeString: string, day: number): Moment => {
  const [hour, minute] = timeString.split(':');
  const newDay = moment().utcOffset(TIME_OFFSET);
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
