import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import { CiLight } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';
import styled from 'styled-components';
import { StyledThemeButton } from './themeButton.styles';
    
    

function ThemeButton(props) {

    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch() ; 
    return (
        <StyledThemeButton onClick={() => { dispatch(toggleTheme()) }}>
           
           {theme == "light" ? <MdOutlineDarkMode/> : <CiLight />  }
            
        </StyledThemeButton>
    );
}

export default ThemeButton;