import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/ar-ma';
import { IState } from './types';

export const initialState: IState = {
  prayers: null,
  cities: null,
  id: parseInt(localStorage.getItem('id') || '1'),
  lang: localStorage.getItem('lang') || 'ar',
  languages: ['ar', 'fr'],
  time: moment().utcOffset(1)
};

export const AppContext = React.createContext(initialState);
