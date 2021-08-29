import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts';

const store = configureStore({
  reducer: contactsReducer.rootReducer,
});

export default store;