import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState, extra }) => {
  //     const contacts = getState(extra);
  //     console.log(contacts);
  // if (contacts.isLoading === true) {
  //   return false;
  // }

  // const { contactList } = getState();
  // console.log(contactList);
  // const fetchStatus = contactList.requests[contacts];
  // if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
  //   // Already fetched or in progress, don't need to re-fetch
  //   return false;
  // }
  // },
  // }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: contact.contactName,
        number: contact.phone,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
