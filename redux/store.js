import { configureStore } from '@reduxjs/toolkit';
import yeeHonkReducer from './playerScore';

const store = configureStore({
    reducer: {
        yeeHonk: yeeHonkReducer,
    },
});

export default store;