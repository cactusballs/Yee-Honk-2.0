import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';

const store = configureStore({
  reducer: {
    yeeHonk: playerReducer,
  },
});

export default store;