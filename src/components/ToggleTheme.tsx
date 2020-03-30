import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';

const ToggleTheme = ({ toggleTheme, theme }: any) => {
  const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10vh;
  `;
  return (
    <StyledWrapper>
      <div>Dark</div>
      <Switch
        onChange={toggleTheme}
        checked={theme === 'light'}
        onColor="#888"
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <div>Light</div>
    </StyledWrapper>
  );
};

export default React.memo(ToggleTheme);
