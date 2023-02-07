import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        year: "Year",
        malt: "Malt",
        grain: "Grain",
    },
    reducers: {
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseMalt: (state, action) => {state.malt = action.payload},
        chooseGrain: (state, action) => {state.grain = action.payload},
    }
})

const rootSlice2 = createSlice({
    name: "root",
    initialState: {
        email: "email",
        first_name : "first_name",
        last_name: "last_name",
        password: "password",
    },
    reducers: {
        chooseEmail: (state, action) => {state.email = action.payload},
        chooseFirstname: (state, action) => {state.first_name = action.payload},
        chooseLastname: (state, action) => {state.last_name = action.payload},
        choosePassword: (state, action) => {state.password = action.payload},
    }
})

export const reducer1 = rootSlice.reducer;
export const {chooseBrand, chooseYear, chooseMalt, chooseGrain } = rootSlice.actions;

export const reducer2 = rootSlice2.reducer;
export const {chooseEmail, chooseFirstname, chooseLastname, choosePassword } = rootSlice2.actions;
