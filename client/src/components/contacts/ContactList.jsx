import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id}  classNames="item" timeout={500}>
                <ContactListItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id}  classNames="item" timeout={500}>
                <ContactListItem contact={contact} />
              </CSSTransition>
            ))
        }
      </TransitionGroup>
    </Fragment>
  );
};

export default ContactList;
