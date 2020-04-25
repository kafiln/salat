import React, { useCallback, useReducer } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import Toggle from './common/toggle';
import Clock from './components/clock';
import Daily from './components/daily';
import Monthly from './components/monthly';
import SelectList from './components/select-list';
import { AppContext, initialState } from './context/AppContext';
import AppReducer from './context/AppReducer';
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_PERIOD,
  CHANGE_THEME,
} from './context/types';
import { I18nProvider, KEYS } from './i18n';
import { dark, GlobalStyles, light } from './themes';

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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

  const changePeriod = useCallback(
    () => dispatch({ payload: null, type: CHANGE_PERIOD }),
    []
  );

  const { theme, lang, id, cities, periodicity } = state;
  const isDaily = periodicity === 'daily';

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <>
        <GlobalStyles />
        <AppContext.Provider value={{ ...state, dispatch }}>
          <I18nProvider locale={lang}>
            <Toggle
              left={'Français'}
              right={'العربية'}
              onChange={changeLanguage}
              checked={lang === 'ar-ma'}
            ></Toggle>
            <br />
            <Toggle
              left={<FormattedMessage id={KEYS.MONTH} />}
              right={<FormattedMessage id={KEYS.DAY} />}
              onChange={changePeriod}
              checked={isDaily}
            ></Toggle>
            <br />
            <Toggle
              right={<FormattedMessage id={KEYS.LIGHT} />}
              left={<FormattedMessage id={KEYS.DARK} />}
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
          </I18nProvider>
        </AppContext.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
