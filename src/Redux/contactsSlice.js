import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(userName, number) {
        return {
          payload: {
            id: nanoid(),
            name: userName,
            number: number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const contactIdx = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(contactIdx, 1);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  // reducers: {
  // addContact: {
  //   reducer(state, action) {
  //     state.contacts.items.push(action.payload);
  //   },
  //   prepare(userName, number) {
  //     return {
  //       payload: {
  //         id: nanoid(),
  //         name: userName,
  //         number: number,
  //       },
  //     };
  //   },
  // },
  // filteredContact: (state, action) => {
  //   state.filter = action.payload;
  // },

  // deleteContact: (state, action) => {
  //   const contactIdx = state.contacts.items.findIndex(
  //     contact => contact.id === action.payload
  //   );
  //   state.contacts.items.splice(contactIdx, 1);
  // },
  // },
});
// export const { addContact, deleteContact, filteredContact } =
//   contactsSlice.actions;
export const { filteredContact, addContact, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
