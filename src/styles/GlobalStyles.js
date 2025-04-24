// src/styles/globalStyles.js
// import { createContext } from 'react';
import { createGlobalStyle } from 'styled-components';
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeProvider';
// ThemeContext
// export const ThemeContext = createContext();

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.5s, color 0.5s;
  }
  html{
    font-size: 10px;
    margin:0;
    padding:0;
  }
  :root{
    --w-dashboard: 200px;
    --w-dashboard-collapse: 60px;
  }
  @media   (max-width: 576px) {
    html {
      font-size: 8px;
    } 
    :root{
      --w-dashboard: 150px;
    --w-dashboard-collapse: 48px;
    }
  }
  @media   (min-width: 577px) {
    html {
      font-size: 10px;
    } 
  }
  @media   (min-width: 939px) {
    html {
      font-size: 12px;
    } 
  }
  body {
    /* font-size: 1.6rem; */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;  // لتحويل سلس بين الثيمات
    max-width: 100vw;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  // يمكنك إضافة المزيد من الأنماط العامة هنا
`;