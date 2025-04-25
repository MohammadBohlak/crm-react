// store/slices/customersSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const themsSlice = createSlice({
//   name: 'theme',
//   initialState: "light",
//   reducers: {
//     toggleTheme: (state) => state == "light" ? "dark" : "light"
//   },
// });

// export const { toggleTheme } = themsSlice.actions;
// export default themsSlice.reducer;


// store/slices/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { customColorThemes, darkTheme, lightTheme } from '../../styles/themes';
// import { lightTheme, darkTheme, customColorThemes } from '../../src/styles/themes';

const initialState = {
  currentTheme: lightTheme,
  themeType: 'light' // يمكن أن تكون 'light', 'dark', أو اسم اللون المخصص
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.currentTheme = lightTheme;
      state.themeType = 'light';
    },
    setDarkTheme: (state) => {
      state.currentTheme = darkTheme;
      state.themeType = 'dark';
    },
    setCustomTheme: (state, action) => {
      state.currentTheme = customColorThemes[action.payload];
      state.themeType = action.payload;
    }
  },
});

export const { setLightTheme, setDarkTheme, setCustomTheme } = themeSlice.actions;
export default themeSlice.reducer;
