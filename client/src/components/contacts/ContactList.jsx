import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))
      }
    </Fragment>
  );
};

export default ContactList;
