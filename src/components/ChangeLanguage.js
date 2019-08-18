import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ChangeLanguage({ onChange }) {
  const state = useContext(AppContext);
  return (
    <select value={state.lang} onChange={onChange}>
      {state.languages.map(lang => (
        <option value={lang} key={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
