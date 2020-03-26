import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';

const ChangeLanguage = ({ changeLanguage, lang }: any) => {
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

export default React.memo(ChangeLanguage);
