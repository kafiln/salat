import {
  CHANGE_CITY,
  LOAD_CITIES,
  LOAD_PRAYERS,
  REFRESH_TIME,
  CHANGE_LANGUAGE,
  IState,
  IAction
} from './types';
import moment from 'moment';

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem('id', action.payload);
      return {
        ...state,
        id: action.payload
      };
    case CHANGE_LANGUAGE:
      const lang = state.lang === 'fr' ? 'ar' : 'fr';
      localStorage.setItem('lang', lang);
      return {
        ...state,
        lang
      };
    case REFRESH_TIME:
      return {
        ...state,
        time: moment(state.time).add(1, 'seconds')
      };
    case LOAD_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    case LOAD_PRAYERS:
      return {
        ...state,
        prayers: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
