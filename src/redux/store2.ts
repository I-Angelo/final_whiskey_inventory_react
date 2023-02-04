// Store is the redux version of State

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice2';

export const store = configureStore({
    reducer, //this is an object
    devTools: true
})

