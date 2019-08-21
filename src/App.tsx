import React, { useEffect, useReducer } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import 'reset-css';
import './App.css';

import Spinner from './common/Spinner';
import Clock from './components/Clock';
import PrayerCard from './components/PrayerCard';
import SelectList from './components/SelectList';
import ChangeLanguage from './components/ChangeLanguage';

import {
  cleanLocalStorage,
  getFromLocalStorageOrApi
} from './utils/localStorage';

import AppReducer from './context/AppReducer';
import { AppContext, initialState } from './context/AppContext';
import {
  LOAD_CITIES,
  LOAD_PRAYERS,
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  REFRESH_TIME
} from './context/types';

const API_URL = 'https://maroc-salat.herokuapp.com/';

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const AppWrapper = styled.div`
    color: white;
    width: 75vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 500px) and (max-width: 600px) {
      
        width: 70vw;
        font-size: calc(1rem + 1vh);
    }
    @media (min-width: 600px) and (max-width: 700px) {
      
        width: 65vw;
        font-size: calc(1.2rem + 1vh);
    }
    @media (min-width: 700px) and (max-width: 800px) {
      
        width: 60vw;
        font-size: calc(1.4rem + 1vh);
    }
    @media (min-width: 800px) and (max-width: 1200px) {
      
        width: 45vw;
        font-size: calc(1.6rem + 1vh);
    }
    @media (min-width: 1200px) {
      
        width: 450px;
        font-size: 2rem;
  `;

  useEffect(() => {
    async function init() {
      const PRAYERS_KEY = `prayers_${moment().date()}_${moment().month() + 1}`;
      const URL = `${API_URL}prayer?month=${moment().month() +
        1}&day=${moment().date()}`;
      const initalCities = await getFromLocalStorageOrApi(
        `cities_${state.lang}`,
        `${API_URL}city?lang=${state.lang}`
      );
      dispatch({ type: LOAD_CITIES, payload: initalCities });
      const initialPrayers = await getFromLocalStorageOrApi(PRAYERS_KEY, URL);
      dispatch({ type: LOAD_PRAYERS, payload: initialPrayers });
      cleanLocalStorage('id', 'cities_ar', 'cities_fr', 'lang', PRAYERS_KEY);
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lang]);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: REFRESH_TIME, payload: moment() }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  const changeCity = (e: any) =>
    dispatch({ payload: e.value, type: CHANGE_CITY });

  const changeLanguage = (lang: string) =>
    dispatch({ payload: lang, type: CHANGE_LANGUAGE });

  return (
    <AppContext.Provider value={state}>
      <AppWrapper>
        <ChangeLanguage changeCity={changeLanguage} />

        {state.id && state.prayers ? (
          <>
            <Clock />
            <PrayerCard />
            <SelectList onChange={changeCity} />
          </>
        ) : (
          <Spinner />
        )}
      </AppWrapper>
    </AppContext.Provider>
  );
};

export default App;
