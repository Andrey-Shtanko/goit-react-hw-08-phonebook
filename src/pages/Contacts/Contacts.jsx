// import { ContactForm } from '/components/ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContsctList';
// import { Loading } from './Loading/Loading';
// import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { fetchContacts } from './../Redux/operations';

import { getIsContactExist } from './../../Redux/contacts/selectors';
import { fetchContacts } from './../../Redux/contacts/operations';
import { Container } from './../../components/App.styled';
import { ContactForm } from './../../components/ContactForm/ContactForm';
import { Filter } from './../../components/Filter/Filter';
import { Loading } from './../../components/Loading/Loading';
import { ContactList } from './../../components/ContactList/ContsctList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getIsContactExist);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Loading />
      {contacts && <ContactList />}
    </Container>
  );
};

export default ContactsPage;
