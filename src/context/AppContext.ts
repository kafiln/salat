import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/ar-ma';
import { IState } from './types';
import cities from '../data/cities.json';
import { TIME_OFFSET } from '../settings';

export const initialState: IState = {
  cities,
  id: parseInt(localStorage.getItem('id') || '80'),
  lang: localStorage.getItem('lang') || 'fr-fr',
  languages: ['ar-ma', 'fr-fr'],
  time: moment().utcOffset(TIME_OFFSET),
  theme: localStorage.getItem('theme') || 'light',
  periodicity: localStorage.getItem('periodicity') || 'daily',
  dispatch: () => ({}),
};

export const AppContext = React.createContext<IState>(initialState);
