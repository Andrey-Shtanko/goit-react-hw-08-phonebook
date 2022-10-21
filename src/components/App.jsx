
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContsctList';
import { deleteContact } from 'Redux/contactsSlice';

import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';



export const App = () => {
 
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.contacts)

  const filter = useSelector(state => state.filter)
  
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId))
    
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length !== 0 && (
        <ContactList contacts={visibleContacts} onDelete={ deleteContactById} />
      )}
    </Container>
  );
};
