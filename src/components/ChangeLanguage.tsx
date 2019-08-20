import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default ({ onChange }: any) => {
  const { lang, languages } = useContext(AppContext);
  return (
    <select value={lang} onChange={onChange}>
      {languages.map((lang: string) => (
        <option value={lang} key={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};
