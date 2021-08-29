import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'APIServise/contactsAPI';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

export const DB_fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DB_postContact = createAsyncThunk(
  'contacts/postContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.postContact(name, number);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DB_deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAction(
  'contactsList/addContact',
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  }),
);

export const deleteContact = createAction('contacts/deleteContact');

export const filterContacts = createAction('contacts/filterContacts');