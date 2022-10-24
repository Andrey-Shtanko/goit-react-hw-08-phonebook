import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';

import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './../Redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.stateRedux.contacts);
  const isLoading = useSelector(state => state.stateRedux.contacts.isLoading);
  const error = useSelector(state => state.stateRedux.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Waiting for contacts...</b>}
      {contacts.length !== 0 && <ContactList />}
    </Container>
  );
};
