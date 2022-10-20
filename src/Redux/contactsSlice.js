const { createSlice } = require("@reduxjs/toolkit");


const initialState = []

const contactsSlice = createSlice({
    name: 'ccontacts',
    initialState,
    reducers: {
      
        addContacts: (state, action) => {
            state.push(action.payload)
        },
        deleteContact: (state, action) => {
            const contactIdx = state.findIndex(contact => contact.id === action.payload);
            state.splice(contactIdx, 1);

        },
        
    }
})
const { addContacts, deleteContact } = contactsSlice.action;
const contactsReducer = contactsSlice.reducer;