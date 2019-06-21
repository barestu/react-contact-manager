import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default ContactList;
