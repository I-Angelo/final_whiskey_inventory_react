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

// const rootSlice2 = createSlice({
//     name: "root",
//     initialState: {
//         email: "Email",
//         first_name : "First Name",
//         last_name: "Last Name",
//         password: "Password",
//     },
//     reducers: {
//         chooseEmail: (state, action) => {state.email = action.payload},
//         chooseFirstname: (state, action) => {state.first_name = action.payload},
//         chooseLastname: (state, action) => {state.last_name = action.payload},
//         choosePassword: (state, action) => {state.password = action.payload},
//     }
// })

// const rootReducer = combineReducers({
//     reducer: reducer,
//     reducer2: reducer2
//   });

// export const reducer2 = rootSlice2.reducer;
// export const {chooseEmail, chooseFirstname, chooseLastname, choosePassword } = rootSlice2.actions;
export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseYear, chooseMalt, chooseGrain } = rootSlice.actions;
// export default rootReducer;

// Lines 4 - 9 is the initial state of the contact.
// Reducer keep an 'ear open' to see if anything has changed from the original 'state'.
//REducer split or clice the information accordingly by making copie and not changing the original iunformation
//  and see if anything has happened or changed in any of the separate fields adn display the information accordingly

