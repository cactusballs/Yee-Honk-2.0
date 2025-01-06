import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';  // Import playerReducer from playerSlice.js

const store = configureStore({
  reducer: {
    yeeHonk: playerReducer,  // Add playerReducer to the store
  },
});

// Ensure you export both the store and the togglePause action
export { store };
export { togglePause } from './playerSlice';  // Export togglePause from playerSlice.js

export default store;