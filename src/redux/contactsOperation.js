import axios from 'axios';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../services/contactsApi.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://611a85245710ca00173a1a7b.mockapi.io';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = { name, number };
      const { data } = await fetchAddContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);