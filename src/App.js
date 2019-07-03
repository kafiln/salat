import React, { useState, useEffect } from 'react';
import 'reset-css';
import './App.css';
import moment from 'moment';

import Spinner from './common/spinner';
import PrayerCard from './components/prayerCard';
import SelectList from './components/selectList';
import { useLocalStorage } from './utils/customHooks';
import {
  cleanLocalStorage,
  getFromLocalStorageOrApi
} from './utils/localStorage';

const API_URL = 'https://maroc-salat.herokuapp.com/';

const App = () => {
  const [id, setId] = useLocalStorage('id', 1);
  const [cities, setCities] = useState();
  const [prayers, setPrayers] = useState();
  const PRAYERS_KEY = `prayers_${moment().date()}_${moment().month() + 1}`;
  const URL = `${API_URL}prayer?month=${moment().month() +
    1}&day=${moment().date()}`;

  useEffect(() => {
    async function init() {
      const initalCities = await getFromLocalStorageOrApi(
        'cities',
        `${API_URL}city`
      );
      setCities(initalCities);
      const initialPrayers = await getFromLocalStorageOrApi(PRAYERS_KEY, URL);
      setPrayers(initialPrayers);

      cleanLocalStorage('id', 'cities', PRAYERS_KEY);
    }
    init();
  }, []);

  return (
    <div id="main">
      {id && prayers ? (
        <>
          <PrayerCard prayer={prayers.find(e => e.id === id)} />
          <SelectList
            value={id}
            values={cities}
            onChange={e => setId(e.value)}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
