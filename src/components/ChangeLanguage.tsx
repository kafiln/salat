import React, { useContext } from 'react';
// import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

export default ({ changeCity }: any) => {
  const { lang } = useContext(AppContext);
  const languages = ['ar', 'fr'];

  // const StyledUl = styled.ul`
  //   display: flex;
  //   align-items: center;
  // `;

  return (
    <ul className="changeCity">
      {languages.map((currentLang: string) => (
        <li
          className={currentLang === lang ? 'activeLang' : ''}
          value={lang}
          key={currentLang}
          onClick={() => changeCity(currentLang)}
        >
          {currentLang}
        </li>
      ))}
    </ul>
  );
};
