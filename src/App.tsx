import React, { useReducer, useCallback, useState } from 'react';

import Monthly from './components/monthly';
import Clock from './components/clock';
import SelectList from './components/select-list';
import Daily from './components/daily';

import AppReducer from './context/AppReducer';
import { AppContext, initialState } from './context/AppContext';
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_THEME
  // CHANGE_PERIOD
} from './context/types';

import { GlobalStyles, light, dark } from './themes';
import { ThemeProvider } from 'styled-components';
import Toggle from './common/toggle';

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [isDaily, setIsDaily] = useState(false);

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

  // const changePeriod = useCallback(
  //   () => dispatch({ payload: null, type: CHANGE_PERIOD }),
  //   []
  // );

  const changePeriod = useCallback(() => setIsDaily(!isDaily), [isDaily]);

  const { theme, lang, id, cities } = state;
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <>
        <GlobalStyles />
        <AppContext.Provider value={{ ...state, dispatch }}>
          <Toggle
            left={'Français'}
            right={'العربية'}
            onChange={changeLanguage}
            checked={lang === 'ar'}
          ></Toggle>
          <br />
          <Toggle
            left={'Mois'}
            right={'Jour'}
            onChange={changePeriod}
            checked={isDaily}
          ></Toggle>
          <br />
          <Toggle
            left={'Dark'}
            right={'Light'}
            onChange={changeTheme}
            checked={theme === 'light'}
          ></Toggle>
          <SelectList
            onChange={changeCity}
            cities={cities}
            lang={lang}
            id={id}
          />
          <Clock displayClock={isDaily} />
          {isDaily ? <Daily /> : <Monthly />}
        </AppContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
