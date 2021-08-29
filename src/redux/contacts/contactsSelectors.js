import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;
const isLoading = state => state.isLoading;
const error = state => state.error;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (contacts && filter) {
      const normalizedFilter = filter.toLowerCase();
      const filteredContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );

      return filteredContact;
    }
    return contacts;
  },
);

export { getContacts, getFilter, getFilteredContacts, isLoading, error };