import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/ar-ma';

export const initialState = {
  prayers: null,
  cities:
    localStorage.getItem('lang') &&
    localStorage.getItem(`cities_${localStorage.getItem('lang')}`)
      ? localStorage.getItem(`cities_${localStorage.getItem('lang')}`)
      : null,
  id: +localStorage.getItem('id') || 1,
  lang: localStorage.getItem('lang') || 'ar',
  languages: ['ar', 'fr'],
  time: new moment()
};

export const AppContext = React.createContext(initialState);
