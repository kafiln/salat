import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

export const initialState = {
  prayers: null,
  cities: null,
  id: +localStorage.getItem('id') || 1,
  lang: localStorage.getItem('lang') || 'fr',
  languages: ['ar', 'fr'],
  time: new moment()
};

export const AppContext = React.createContext(initialState);
