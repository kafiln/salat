import moment from 'moment';

export const parseTime = (time: string): string =>
  moment.utc(time).format('HH:mm');
