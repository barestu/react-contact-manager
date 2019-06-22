import React, { useContext, useEffect } from 'react';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactList';
import ContactFilter from '../components/contacts/ContactFilter';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
