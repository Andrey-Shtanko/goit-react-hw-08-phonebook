import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    redusers: {
        filtredContact:(action) => { 
            return action.payload
        }
    }
})


export const { filtredContact } = filterSlice.actions
export const filterReducer = filterSlice.reducer
// const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };
//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };