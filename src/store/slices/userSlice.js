// src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// دالة مساعدة لتحميل الحالة الأولية
const loadUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('user');
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

const initialState = {
  user: loadUserFromStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        role: action.payload.role
      };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;