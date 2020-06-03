import moment from 'moment';
import { TIME_OFFSET } from '../settings';

export const parseTime = (time: string): string =>
  moment.utc(time).utcOffset(TIME_OFFSET).format('HH:mm');
