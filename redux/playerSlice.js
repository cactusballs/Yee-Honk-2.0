
import { createSlice } from '@reduxjs/toolkit';


const playerSlice = createSlice({
  name: 'yeeHonk',
  initialState: {
    isPaused: false,
  },
  reducers: {
    togglePause: (state) => {
      state.isPaused = !state.isPaused;
    },
  },
});

export const { togglePause } = playerSlice.actions;

export default playerSlice.reducer;
