import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63551005483f5d2df3ac5743.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await axios.get('/contacts');
  return contacts.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactName, number) => {
    const response = await axios.post();
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(contactId);
    return response.data;
  }
);
