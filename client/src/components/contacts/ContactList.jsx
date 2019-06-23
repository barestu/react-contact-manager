import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../../components/layout/Spinner';
import ContactListItem from './ContactListItem';
import ContactContext from '../../context/contact/contactContext';

const ContactList = () => {
  const {
    contacts,
    filtered,
    getContacts,
    isLoading,
  } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !isLoading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition key={contact._id} classNames="item" timeout={500}>
                  <ContactListItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition key={contact._id} classNames="item" timeout={500}>
                  <ContactListItem contact={contact} />
                </CSSTransition>
              ))
          }
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ContactList;
