import {
  CHANGE_CITY,
  LOAD_PRAYERS,
  REFRESH_TIME,
  CHANGE_LANGUAGE,
  IState,
  IAction
} from './types';
import moment from 'moment';
import { TIME_OFFSET } from '../settings';

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem('id', action.payload);
      return {
        ...state,
        time: moment().utcOffset(TIME_OFFSET),
        id: action.payload
      };
    case CHANGE_LANGUAGE:
      const lang = state.lang === 'fr' ? 'ar' : 'fr';
      localStorage.setItem('lang', lang);
      return {
        ...state,
        time: moment().utcOffset(TIME_OFFSET),
        lang
      };
    case REFRESH_TIME:
      return {
        ...state,
        time: moment().utcOffset(TIME_OFFSET)
      };
    case LOAD_PRAYERS:
      return {
        ...state,
        time: moment().utcOffset(TIME_OFFSET),
        prayers: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
