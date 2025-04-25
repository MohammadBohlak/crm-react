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
import { api } from '../../utils/api/api';
import { ENDPOINTS } from '../../utils/api/endPoints';
// import { lightTheme, darkTheme, customColorThemes } from '../../src/styles/themes';

const initialState = {
  currentTheme: lightTheme,
  themeType: 'light' // يمكن أن تكون 'light', 'dark', أو اسم اللون المخصص
};
  const setLocalTheme = (theme) =>{
    const user = {...JSON.parse(localStorage.getItem('user')), theme: theme}
    
    api.put(ENDPOINTS.USERS.EDIT(user.id), user)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.currentTheme = lightTheme;
      state.themeType = 'light';
     setLocalTheme("light")
    },
    setDarkTheme: (state) => {
      state.currentTheme = darkTheme;
      state.themeType = 'dark';
     setLocalTheme("dark")

    },
    setCustomTheme: (state, action) => {
      state.currentTheme = customColorThemes[action.payload];
      state.themeType = action.payload;
      setLocalTheme(action.payload)
    }
  },
});

export const { setLightTheme, setDarkTheme, setCustomTheme } = themeSlice.actions;
export default themeSlice.reducer;
