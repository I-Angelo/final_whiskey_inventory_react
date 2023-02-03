import { createSlice } from '@reduxjs/toolkit';


const rootSlice2 = createSlice({
    name: "root",
    initialState: {
        email: "Email",
        first_name : "First Name",
        last_name: "Last Name",
        password: "Password",
    },
    reducers: {
        chooseEmail: (state, action) => {state.email = action.payload},
        chooseFirstname: (state, action) => {state.first_name = action.payload},
        chooseLastname: (state, action) => {state.last_name = action.payload},
        choosePassword: (state, action) => {state.password = action.payload},
    }
})

export const reducer = rootSlice2.reducer;
export const {chooseEmail, chooseFirstname, chooseLastname, choosePassword } = rootSlice2.actions;

