import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Artour',
        email: 'Artour@gmmail.com',
        phone: '089123321123',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Leny',
        email: 'Leny@gmmail.com',
        phone: '089123321123',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Cleo',
        email: 'Cleo@gmmail.com',
        phone: '089123321123',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ ...state }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;