// src/components/ThemeSwitcher.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { setCustomTheme, setDarkTheme, setLightTheme } from '../store/slices/themeSlice';
import { customColorThemes } from '../styles/themes';

const ThemeSwitcherWrapper = styled.div`
  width: fit-content;
  display: flex; 
  flex-wrap: wrap;
  padding: 0;
  @media (max-width: 290px ){
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 3px;
    margin-top: 3px;
}
`;

const ThemeButton = styled(Button)`
 aspect-ratio: 1/1;
  width: 25px;
  border-radius: 50%;
  margin-left: 5px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;
  transition: transform 0.2s;
  @media (max-width: 430px ){
    width: 15px;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { themeType } = useSelector((state) => state.theme);

  return (
    <ThemeSwitcherWrapper>
        {/* Light/Dark Themes */}
        <ThemeButton 
          variant="outline-primary"
          onClick={() => dispatch(setLightTheme())}
          style={{ 
            backgroundColor: "#FFFFFF"
          }}
        />
        
        <ThemeButton 
          variant="outline-dark"
          onClick={() => dispatch(setDarkTheme())}
          style={{ 
            // backgroundColor: '#7C3AED'
            backgroundColor: '#1E293B'
          }}
        />

        {/* Custom Color Themes */}
        {['red', 'blue', 'green', 'yellow'].map((color) => (
          <ThemeButton
            key={color}
            onClick={() => dispatch(setCustomTheme(color))}
            style={{ 
              backgroundColor: themeType === color 
                ? customColorThemes[color].colors.primary 
                : customColorThemes[color].colors.secondary
            }}
          />
        ))}
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;