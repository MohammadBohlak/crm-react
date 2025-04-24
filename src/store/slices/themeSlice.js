// store/slices/customersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themsSlice = createSlice({
  name: 'theme',
  initialState: "light",
  reducers: {
    toggleTheme: (state) => state == "light" ? "dark" : "light"
  },
});

export const { toggleTheme } = themsSlice.actions;
export default themsSlice.reducer;


