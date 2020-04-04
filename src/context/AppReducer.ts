import {
  CHANGE_CITY,
  REFRESH_TIME,
  CHANGE_LANGUAGE,
  // CHANGE_PERIOD,
  CHANGE_THEME,
  IState,
  IAction,
} from './types';
import moment from 'moment';
import { TIME_OFFSET } from '../settings';

const withTime = (state: IState) => {
  const time = moment().utcOffset(TIME_OFFSET);
  return {
    ...state,
    time,
  };
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem('id', action.payload);
      return {
        ...withTime(state),
        id: action.payload,
      };
    case CHANGE_LANGUAGE:
      const lang = state.lang === 'fr-fr' ? 'ar-ma' : 'fr-fr';
      localStorage.setItem('lang', lang);
      return {
        ...withTime(state),
        lang,
      };
    // case CHANGE_PERIOD:
    //   const isDaily = `${!state.isDaily}`;
    //   localStorage.setItem('isDaily', isDaily);
    //   return {
    //     ...withTime(state),
    //     isDaily
    //   };
    case CHANGE_THEME:
      const theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      return {
        ...withTime(state),
        theme,
      };
    case REFRESH_TIME:
      // console.log('refreshing time');
      return {
        ...withTime(state),
      };
    default:
      return state;
  }
};

export default reducer;
