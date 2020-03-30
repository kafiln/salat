import React, { useEffect, useReducer, useCallback } from 'react';
import moment from 'moment';

import Clock from './components/clock';
import SelectList from './components/select-list';
import PrayerCard from './components/prayer-card';

import {
  cleanLocalStorage,
  getFromLocalStorageOrApi
} from './utils/localStorage';

import AppReducer from './context/AppReducer';
import { AppContext, initialState } from './context/AppContext';
import {
  LOAD_PRAYERS,
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  REFRESH_TIME
} from './context/types';
import { API_URL } from './settings';

import { GlobalStyles, light, dark } from './themes';
import { ThemeProvider } from 'styled-components';
import Toggle from './common/toggle';

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    async function init() {
      // Init the prayers
      dispatch({ type: LOAD_PRAYERS, payload: null });

      // Form the key string
      const PRAYERS_KEY = `prayers_${moment().date()}_${moment().month() + 1}_${
        state.id
      }`;

      // Form the URL
      const URL = `${API_URL}prayer?city=${state.id}&month=${moment().month() +
        1}&day=${moment().date()}`;

      // Load initial values from localstorage or API
      const initialPrayers = await getFromLocalStorageOrApi(PRAYERS_KEY, URL);

      // Update the store
      dispatch({ type: LOAD_PRAYERS, payload: initialPrayers });

      // Clean the localStorage
      cleanLocalStorage(PRAYERS_KEY);
    }
    init();
  }, [state.lang, state.id]);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: REFRESH_TIME, payload: null }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  const changeCity = useCallback(
    (e: any) => dispatch({ payload: e.value, type: CHANGE_CITY }),
    []
  );

  const changeLanguage = useCallback(
    () => dispatch({ payload: null, type: CHANGE_LANGUAGE }),
    []
  );
  const changeTheme = useCallback(
    () => dispatch({ payload: null, type: CHANGE_THEME }),
    []
  );

  return (
    <ThemeProvider theme={state.theme === 'light' ? light : dark}>
      <>
        <GlobalStyles />
        <AppContext.Provider value={state}>
          <Toggle
            left={'Français'}
            right={'العربية'}
            onChange={changeLanguage}
            checked={state.lang === 'ar'}
          ></Toggle>
          <SelectList
            onChange={changeCity}
            cities={state.cities}
            lang={state.lang}
            id={state.id}
          />
          <Clock />
          <PrayerCard />
          <Toggle
            left={'Dark'}
            right={'Light'}
            onChange={changeTheme}
            checked={state.theme === 'light'}
          ></Toggle>
        </AppContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
