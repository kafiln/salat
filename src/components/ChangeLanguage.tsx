import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import Switch from 'react-switch';

export default ({ changeLanguage }: any) => {
  const { lang } = useContext(AppContext);

  const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  return (
    <StyledWrapper>
      <div>Français</div>
      <Switch
        onChange={() => changeLanguage()}
        checked={lang === 'ar'}
        onColor="#888"
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <div>العربية</div>
    </StyledWrapper>
  );
};
