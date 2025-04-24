// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import themeSlice from './slices/themeSlice';
import loaderSlice from "./slices/loaderSlice"
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    customers: customerSlice,
    theme: themeSlice,
    loader: loaderSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', // تفعيل أدوات التطوير فقط في وضع التطوير
});

// نوع RootState لاستخدامه في useSelector
// export const selectAuth = (state) => state.auth;
export const selectCustomers = (state) => state.customers;